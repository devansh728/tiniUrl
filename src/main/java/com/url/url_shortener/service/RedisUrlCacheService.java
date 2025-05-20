package com.url.url_shortener.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;

import java.util.concurrent.TimeUnit;

@Service
public class RedisUrlCacheService {

    private final RedisTemplate<String, String> redisTemplate;

    // Base TTL in seconds (1 day)
    private static final long BASE_TTL = 86400;
    // Maximum TTL in seconds (7 days)
    private static final long MAX_TTL = 604800;
    // Minimum TTL in seconds (1 hour)
    private static final long MIN_TTL = 3600;

    @Autowired
    public RedisUrlCacheService(RedisTemplate<String, String> redisTemplate) {
        this.redisTemplate = redisTemplate;
    }

    public void cacheUrl(String shortUrl, String longUrl) {

        redisTemplate.opsForValue().set(shortUrl, longUrl, BASE_TTL, TimeUnit.SECONDS);
    }

    public String getCachedUrl(String shortUrl) {
        String longUrl = redisTemplate.opsForValue().get(shortUrl);

        if (longUrl != null) {
            // URL was found in cache - extend its TTL based on frequency
            long currentTtl = redisTemplate.getExpire(shortUrl, TimeUnit.SECONDS);
            if (currentTtl > 0) {
                // Increase TTL up to MAX_TTL based on remaining TTL
                long newTtl = Math.min(currentTtl * 2, MAX_TTL);
                redisTemplate.expire(shortUrl, newTtl, TimeUnit.SECONDS);
            }
        }

        return longUrl;
    }

    public void updateUrlAccess(String shortUrl) {
        long currentTtl = redisTemplate.getExpire(shortUrl, TimeUnit.SECONDS);

        if (currentTtl > 0) {
            // Gradually decrease TTL for less frequently accessed URLs
            long newTtl = Math.max(currentTtl / 2, MIN_TTL);
            redisTemplate.expire(shortUrl, newTtl, TimeUnit.SECONDS);
        }
    }
}