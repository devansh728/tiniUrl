package com.url.url_shortener.service;

import com.url.url_shortener.dto.LoginRequest;
import com.url.url_shortener.models.Users;
import com.url.url_shortener.repository.UserRepository;
import com.url.url_shortener.security.jwt.JwtAuthenticationResponse;
import com.url.url_shortener.security.jwt.jwtUtils;
import lombok.AllArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@AllArgsConstructor
public class UserService {
    private static final Logger logger = LoggerFactory.getLogger(UserService.class);

    private PasswordEncoder passwordEncoder;
    private AuthenticationManager authenticationManager;
    private jwtUtils jwtUtils;
    private UserRepository userrepository;

    public Users registerUser(Users user) {
        if (user.getUsername() != null && user.getPassword() != null) {
            user.setPassword(passwordEncoder.encode(user.getPassword()));
            return userrepository.save(user);
        }
        return null;
    }

    public JwtAuthenticationResponse authenticateUser(LoginRequest user) {
        logger.info("Attempting to authenticate user: {}", user.getUsername());

        if (user.getUsername() != null && user.getPassword() != null) {
            try {
                // Check if user exists in database
                Optional<Users> userOptional = userrepository.findByUsername(user.getUsername());
                if (userOptional.isEmpty()) {
                    logger.warn("User not found in database: {}", user.getUsername());
                    return null;
                }

                // Attempt authentication
                Authentication authentication = authenticationManager.authenticate(
                        new UsernamePasswordAuthenticationToken(user.getUsername(), user.getPassword())
                );

                logger.info("User authenticated successfully: {}", user.getUsername());
                SecurityContextHolder.getContext().setAuthentication(authentication);

                userDetailsImpl userDetails = (userDetailsImpl) authentication.getPrincipal();
                String jwt = jwtUtils.generateToken(userDetails);
                logger.info("JWT token generated for user: {}", user.getUsername());

                return new JwtAuthenticationResponse(jwt);
            } catch (BadCredentialsException e) {
                logger.error("Bad credentials for user: {}", user.getUsername());
                throw e;
            } catch (Exception e) {
                logger.error("Authentication failed for user: {}", user.getUsername(), e);
                throw e;
            }
        }
        logger.warn("Username or password is null");
        return null;
    }

    public Optional<Users> findByUsername(String name) {
        return userrepository.findByUsername(name);
    }
}