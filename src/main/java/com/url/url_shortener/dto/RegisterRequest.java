package com.url.url_shortener.dto;

import lombok.Data;
import org.springframework.security.core.GrantedAuthority;

import java.util.Set;

@Data
public class RegisterRequest {

    private String username;
    private String password;
    private String email;
    private Set<? extends GrantedAuthority> authorities;



}
