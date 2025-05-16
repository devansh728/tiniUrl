package com.url.url_shortener.controller;

import com.url.url_shortener.dto.ClickEventDTO;
import com.url.url_shortener.dto.MappingRequest;
import com.url.url_shortener.dto.UrlMappingDto;
import com.url.url_shortener.models.Users;
import com.url.url_shortener.repository.UrlMappingRepository;
import com.url.url_shortener.security.jwt.JwtAuthenticationResponse;
import com.url.url_shortener.service.UrlMappingService;
import com.url.url_shortener.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("api/urls")
@AllArgsConstructor
public class urlController {

    private UrlMappingService urlMappingService;
    private UserService userService;

    @PostMapping("/shortenUrl")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<?> urlMapper(@RequestBody MappingRequest map, Principal principal){
        String longUrl = map.getOriginalUrl();
        Users user = userService.findByUsername(principal.getName()).orElseThrow();
        UrlMappingDto urlMappingDto = urlMappingService.createShortUrl(longUrl,user);
        return ResponseEntity.ok(urlMappingDto);
    }
    @GetMapping("/myurls")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<List<UrlMappingDto>> getUserUrls(Principal principal){
        Optional<Users> user = userService.findByUsername(principal.getName());
        List<UrlMappingDto> urls = urlMappingService.getUrlsByUser(user);
        return ResponseEntity.ok(urls);
    }


    @GetMapping("/analytics/{shortUrl}")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<List<ClickEventDTO>> getUrlAnalytics(@PathVariable String shortUrl,
                                                               @RequestParam("startDate") String startDate,
                                                               @RequestParam("endDate") String endDate){
        DateTimeFormatter formatter = DateTimeFormatter.ISO_LOCAL_DATE_TIME;
        LocalDateTime start = LocalDateTime.parse(startDate, formatter);
        LocalDateTime end = LocalDateTime.parse(endDate, formatter);
        List<ClickEventDTO> clickEventDTOS = urlMappingService.getClickEventsByDate(shortUrl, start, end);
        return ResponseEntity.ok(clickEventDTOS);
    }


    @GetMapping("/totalClicks")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<Map<LocalDate, Long>> getTotalClicksByDate(Principal principal,
                                                                     @RequestParam("startDate") String startDate,
                                                                     @RequestParam("endDate") String endDate){
        DateTimeFormatter formatter = DateTimeFormatter.ISO_LOCAL_DATE;
        Optional<Users> user = userService.findByUsername(principal.getName());
        LocalDate start = LocalDate.parse(startDate, formatter);
        LocalDate end = LocalDate.parse(endDate, formatter);
        Map<LocalDate, Long> totalClicks = urlMappingService.getTotalClicksByUserAndDate(user, start, end);
        return ResponseEntity.ok(totalClicks);
    }
}
