package com.url_shortener.email.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.url_shortener.email.dto.KafkaValue;
import com.url_shortener.email.models.Users;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.extern.slf4j.Slf4j;
import org.apache.kafka.clients.consumer.ConsumerRecord;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
@Slf4j  // Lombok annotation for logging
public class NotificationService {
    @Autowired
    private JavaMailSender mailSender;

    @KafkaListener(topics = "${kafka.topic.name}", groupId = "${spring.kafka.consumer.group-id}")
    public void sendNotificationEmail(String json) {
        try{
        ObjectMapper objectMapper = new ObjectMapper();
        KafkaValue record = objectMapper.readValue(json, KafkaValue.class);

        Users user = record.getUser();

            log.info("Processing notification for user: {}", user.getUsername());

            SimpleMailMessage message = new SimpleMailMessage();
            message.setTo(user.getEmail());
            message.setSubject("Your URLs are getting popular!");
            message.setText(String.format(
                    "Hello %s,\n\n" +
                            "Your short URLs have reached %d total clicks! Keep sharing them!\n\n" +
                            "Best regards,\n" +
                            "TinyUrl Team",
                    user.getUsername(),
                    record.getTotalClicks()
            ));

            mailSender.send(message);
            log.info("Successfully sent notification email to {}", user.getEmail());

        } catch (Exception e) {
            log.error("Failed to send notification email to: {}",e.getMessage());
        }
    }
}
