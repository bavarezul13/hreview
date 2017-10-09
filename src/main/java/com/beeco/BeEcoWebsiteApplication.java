package com.beeco;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;

@SpringBootApplication
@EnableCaching
public class BeEcoWebsiteApplication {

	public static void main(String[] args) {
		SpringApplication.run(BeEcoWebsiteApplication.class, args);
	}
}