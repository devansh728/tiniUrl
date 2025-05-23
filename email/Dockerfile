FROM eclipse-temurin:21-jdk-alpine AS build

WORKDIR /app

COPY target/email-0.0.1-SNAPSHOT.jar app/email-0.0.1-SNAPSHOT.jar

EXPOSE 8081

ENTRYPOINT ["java","-jar","email-0.0.1-SNAPSHOT.jar"]
