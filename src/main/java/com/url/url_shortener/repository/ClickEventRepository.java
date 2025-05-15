package com.url.url_shortener.repository;

import com.url.url_shortener.models.ClickEvent;
import com.url.url_shortener.models.Urlmapping;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface ClickEventRepository extends JpaRepository<ClickEvent, Long> {
    List<ClickEvent> findByUrlMappingAndClickDateBetween(Urlmapping mapping, LocalDateTime startDate, LocalDateTime endDate);
    List<ClickEvent> findByUrlMappingInAndClickDateBetween(List<Urlmapping> urlMappings, LocalDateTime startDate, LocalDateTime endDate);
}
