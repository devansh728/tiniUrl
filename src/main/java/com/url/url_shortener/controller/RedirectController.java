package com.url.url_shortener.controller;

import com.url.url_shortener.models.Urlmapping;
import com.url.url_shortener.service.RedisUrlCacheService;
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
    private final RedisUrlCacheService redisUrlCacheService;

    @GetMapping("/{shortUrl}")
    public ResponseEntity<Void> redirect(@PathVariable String shortUrl){
        String cachedLongUrl = redisUrlCacheService.getCachedUrl(shortUrl);

        if (cachedLongUrl != null) {
            return buildRedirectResponse(cachedLongUrl);
        }
        log.debug("Searching for short URL: {}", shortUrl);
        Urlmapping urlMapping = urlMappingService.getOriginalUrl(shortUrl);
        if (urlMapping != null) {
            redisUrlCacheService.cacheUrl(shortUrl, urlMapping.getOriginalUrl());
            return buildRedirectResponse(urlMapping.getOriginalUrl());
        }
        return ResponseEntity.notFound().build();
    }
    private ResponseEntity<Void> buildRedirectResponse(String longUrl) {
        HttpHeaders headers = new HttpHeaders();
        headers.add("Location", longUrl);
        return ResponseEntity.status(302).headers(headers).build();
    }

}
