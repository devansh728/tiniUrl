package com.url.url_shortener.service;

import com.url.url_shortener.dto.ClickEventDTO;
import com.url.url_shortener.dto.UrlMappingDto;
import com.url.url_shortener.models.ClickEvent;
import com.url.url_shortener.models.Urlmapping;
import com.url.url_shortener.models.Users;
import com.url.url_shortener.repository.ClickEventRepository;
import com.url.url_shortener.repository.UrlMappingRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.Random;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class UrlMappingService {

    // Remove these fields - they should not be injected
    // private UrlMappingDto dto;
    // private Urlmapping urlmapping;

    private UrlMappingRepository urlMappingRepository;
    private ClickEventRepository clickEventRepository;

    public UrlMappingDto createShortUrl(String longUrl, Users user){
        String rand = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*";
        StringBuilder builder = new StringBuilder(8);
        Random random = new Random();
        int i = 0;
        while(i < 8){
            builder.append(rand.charAt(random.nextInt(rand.length()))); // Fixed random.nextInt() to include bounds
            i++;
        }

        // Create a new Urlmapping instance instead of using an injected one
        Urlmapping urlmapping = new Urlmapping();
        urlmapping.setOriginalUrl(longUrl);
        urlmapping.setShortUrl(builder.toString());
        urlmapping.setUser(user);
        urlmapping.setCreatedDate(LocalDateTime.now());
        Urlmapping savedurlmapping = urlMappingRepository.save(urlmapping);

        // Create a new UrlMappingDto instance instead of using an injected one
        UrlMappingDto dto = new UrlMappingDto();
        dto.setOriginalUrl(longUrl);
        dto.setShortUrl(builder.toString());
        dto.setCreatedDate(LocalDateTime.now());
        dto.setUsername(user.getUsername());
        dto.setClickCount(savedurlmapping.getClickCount());
        dto.setId(savedurlmapping.getId());

        return dto;
    }

    public List<UrlMappingDto> getUrlsByUser(Optional<Users> user) {
        return urlMappingRepository.findByUser(user.orElse(null)).stream()
                .map(this::convertToDto)
                .toList();
    }

    private UrlMappingDto convertToDto(Urlmapping urlMapping){
        UrlMappingDto urlMappingDTO = new UrlMappingDto();
        urlMappingDTO.setId(urlMapping.getId());
        urlMappingDTO.setOriginalUrl(urlMapping.getOriginalUrl());
        urlMappingDTO.setShortUrl(urlMapping.getShortUrl());
        urlMappingDTO.setClickCount(urlMapping.getClickCount());
        urlMappingDTO.setCreatedDate(urlMapping.getCreatedDate());
        urlMappingDTO.setUsername(urlMapping.getUser().getUsername());
        return urlMappingDTO;
    }

    public List<ClickEventDTO> getClickEventsByDate(String shortUrl, LocalDateTime start, LocalDateTime end) {
        Urlmapping urlMapping = urlMappingRepository.findByShortUrl(shortUrl);
        if (urlMapping != null) {
            return clickEventRepository.findByUrlMappingAndClickDateBetween(urlMapping, start, end).stream()
                    .collect(Collectors.groupingBy(click -> click.getClickDate().toLocalDate(), Collectors.counting()))
                    .entrySet().stream()
                    .map(entry -> {
                        ClickEventDTO clickEventDTO = new ClickEventDTO();
                        clickEventDTO.setClickDate(entry.getKey());
                        clickEventDTO.setCount(entry.getValue());
                        return clickEventDTO;
                    })
                    .collect(Collectors.toList());
        }
        return null;
    }

    public Map<LocalDate, Long> getTotalClicksByUserAndDate(Optional<Users> user, LocalDate start, LocalDate end) {
        List<Urlmapping> urlMappings = urlMappingRepository.findByUser(user.orElse(null));
        List<ClickEvent> clickEvents = clickEventRepository.findByUrlMappingInAndClickDateBetween(urlMappings, start.atStartOfDay(), end.plusDays(1).atStartOfDay());
        return clickEvents.stream()
                .collect(Collectors.groupingBy(click -> click.getClickDate().toLocalDate(), Collectors.counting()));

    }

    public Urlmapping getOriginalUrl(String shortUrl) {
        Urlmapping urlMapping = urlMappingRepository.findByShortUrl(shortUrl);
        if (urlMapping != null) {
            urlMapping.setClickCount(urlMapping.getClickCount() + 1);
            urlMappingRepository.save(urlMapping);

            // Record Click Event
            ClickEvent clickEvent = new ClickEvent();
            clickEvent.setClickDate(LocalDateTime.now());
            clickEvent.setUrlMapping(urlMapping);
            clickEventRepository.save(clickEvent);
        }

        return urlMapping;
    }
}