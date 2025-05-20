package com.url.url_shortener.controller;

import com.url.url_shortener.models.Urlmapping;
import com.url.url_shortener.service.UrlMappingService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



@RestController
@AllArgsConstructor
@Slf4j
public class RedirectController {

    private UrlMappingService urlMappingService;

    @GetMapping("/{shortUrl}")
    public ResponseEntity<Void> redirect(@PathVariable String shortUrl){

        log.debug("Searching for short URL: {}", shortUrl);
        Urlmapping urlMapping = urlMappingService.getOriginalUrl(shortUrl);
        if (urlMapping != null) {
            HttpHeaders httpHeaders = new HttpHeaders();
            httpHeaders.add("Location", urlMapping.getOriginalUrl());
            return ResponseEntity.status(302).headers(httpHeaders).build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
