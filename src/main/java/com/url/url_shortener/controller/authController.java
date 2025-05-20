package com.url.url_shortener.controller;


import com.url.url_shortener.dto.LoginRequest;
import com.url.url_shortener.dto.RegisterRequest;
import com.url.url_shortener.models.Users;
import com.url.url_shortener.security.jwt.JwtAuthenticationResponse;
import com.url.url_shortener.service.UserService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
@AllArgsConstructor
@Slf4j
public class authController {

    private UserService userservice;

    @PostMapping("/signup")
    public ResponseEntity<?> getSignUp(@RequestBody RegisterRequest registration){
        Users user = new Users();
        user.setUsername(registration.getUsername());
        user.setPassword(registration.getPassword());
        user.setEmail(registration.getEmail());
        user.setRole("ROLE_USER");
        Users usera = userservice.registerUser(user);
        return ResponseEntity.ok("You have registered Successfully");
    }

    @PostMapping("/login")
    public ResponseEntity<?> authenticate(@RequestBody LoginRequest login){
        log.info("hi i reached",login);
        JwtAuthenticationResponse jwt = userservice.authenticateUser(login);
        log.info("hi i completed",jwt);
        return ResponseEntity.ok(jwt);
    }


}
