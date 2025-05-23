package com.url_shortener.email.models;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class Users {
    private Long id;
    private String email;
    private String username;
    private String password;
    private String role = "ROLE_USER";
}
