package com.url.url_shortener.dto;

import com.url.url_shortener.models.ClickEvent;
import com.url.url_shortener.models.Users;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UrlMappingDto {
    private String originalUrl;
    private String shortUrl;
    private int clickCount;
    private LocalDateTime createdDate;
    private String username;
    private long id;    
}
