//package com.url.url_shortener.service;
//
//import com.url.url_shortener.dto.LoginRequest;
//import com.url.url_shortener.models.Users;
//import com.url.url_shortener.repository.UserRepository;
//import com.url.url_shortener.security.jwt.JwtAuthenticationResponse;
//import com.url.url_shortener.security.jwt.jwtUtils;
//import lombok.AllArgsConstructor;
//import lombok.Data;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.context.annotation.Bean;
//import org.springframework.security.authentication.AuthenticationManager;
//import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
//import org.springframework.security.core.Authentication;
//import org.springframework.security.core.context.SecurityContextHolder;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.stereotype.Service;
//
//@Service
//@AllArgsConstructor
//public class UserService {
//
//    private PasswordEncoder passwordEncoder;
//
//    private AuthenticationManager authenticationManager;
//
//    private jwtUtils jwtUtils;
//
//
//    @Autowired
//    private UserRepository userrepository;
//
//    public Users registerUser(Users user){
//        if(user.getUsername()!=null & user.getPassword()!=null){
//            user.setPassword(passwordEncoder.encode(user.getPassword()));
//            return userrepository.save(user);
//        }
//        return null;
//    }
//
//    public JwtAuthenticationResponse authenticateUser(LoginRequest user){
//        if(user.getUsername()!=null & user.getPassword()!=null){
//            Authentication authentication = authenticationManager.authenticate(
//                    new UsernamePasswordAuthenticationToken(user.getUsername(),user.getPassword())
//            );
//            SecurityContextHolder.getContext().setAuthentication(authentication);
//            userDetailsImpl userDetails = (userDetailsImpl) authentication.getPrincipal();
//            String jwt = jwtUtils.generateToken(userDetails);
//            return new JwtAuthenticationResponse(jwt);
//        }
//        return null;
//    }
//
//}
package com.url.url_shortener.service;

import com.url.url_shortener.dto.LoginRequest;
import com.url.url_shortener.models.Users;
import com.url.url_shortener.repository.UserRepository;
import com.url.url_shortener.security.jwt.JwtAuthenticationResponse;
import com.url.url_shortener.security.jwt.jwtUtils;
import lombok.AllArgsConstructor;
// Remove unused imports
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@AllArgsConstructor
public class UserService {

    private PasswordEncoder passwordEncoder;
    private AuthenticationManager authenticationManager;
    private jwtUtils jwtUtils;
    private UserRepository userrepository; // Remove @Autowired since we're using constructor injection

    public Users registerUser(Users user) {
        if (user.getUsername() != null && user.getPassword() != null) { // Changed & to &&
            user.setPassword(passwordEncoder.encode(user.getPassword()));
            return userrepository.save(user);
        }
        return null;
    }

    public JwtAuthenticationResponse authenticateUser(LoginRequest user) {
        if (user.getUsername() != null && user.getPassword() != null) { // Changed & to &&
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(user.getUsername(), user.getPassword())
            );
            SecurityContextHolder.getContext().setAuthentication(authentication);
            userDetailsImpl userDetails = (userDetailsImpl) authentication.getPrincipal();
            String jwt = jwtUtils.generateToken(userDetails);
            return new JwtAuthenticationResponse(jwt);
        }
        return null;
    }

    public Optional<Users> findByUsername(String name) {
        return userrepository.findByUsername(name);
    }
}