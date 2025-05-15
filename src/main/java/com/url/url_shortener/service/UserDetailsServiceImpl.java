package com.url.url_shortener.service;

import com.url.url_shortener.models.Users;
import com.url.url_shortener.repository.UserRepository;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor // Use constructor injection
public class UserDetailsServiceImpl implements UserDetailsService {

    private UserRepository userRepository; // Remove @Autowired

    @Override
    @Transactional
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Users user = userRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not found with username: " + username));
        return userDetailsImpl.build(user);
    }
}
