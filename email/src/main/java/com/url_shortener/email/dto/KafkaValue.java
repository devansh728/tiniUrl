package com.url_shortener.email.dto;

import com.url_shortener.email.models.Users;
import lombok.Data;

@Data
public class KafkaValue {
    private Users user;
    private int TotalClicks;
}
