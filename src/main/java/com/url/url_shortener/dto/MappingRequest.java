package com.url.url_shortener.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class MappingRequest {

    private String originalUrl;
}
