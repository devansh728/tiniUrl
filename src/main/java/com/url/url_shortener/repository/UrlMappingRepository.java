package com.url.url_shortener.repository;

import com.url.url_shortener.models.Urlmapping;
import com.url.url_shortener.models.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UrlMappingRepository extends JpaRepository<Urlmapping,Long> {
    Urlmapping findByShortUrl(String shortUrl);
    List<Urlmapping> findByUser(Users user);

    @Query("SELECT SUM(u.clickCount) FROM Urlmapping u WHERE u.user.id = :userId")
    int getTotalClickCountByUserId(@Param("userId") Long userId);

    @Query("SELECT COUNT(u) FROM Urlmapping u WHERE u.user.id = :userId")
    int getTotalUrlCountByUserId(@Param("userId") Long userId);
}
