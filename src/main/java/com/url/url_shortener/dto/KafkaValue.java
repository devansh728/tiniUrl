package com.url.url_shortener.dto;

import com.url.url_shortener.models.Users;
import lombok.Data;

@Data
public class KafkaValue {
    private Users user;
    private int TotalClicks;
}
