package org.evo.minitasks.controller;


import lombok.SneakyThrows;
import org.evo.minitasks.config.Configuration;
import org.evo.minitasks.service.HmacService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1")
public class AuthV1Controller {
    @SneakyThrows
    @PostMapping("/auth/token")
    public ResponseEntity validateInitData(
            @RequestParam String dataCheckString,
            @RequestParam String telegramHash
    ) {
        String secretKey = HmacService.generateHMACSignature(Configuration.BOT_TOKEN, "WebAppData");
        String hash = HmacService.generateHMACSignature(dataCheckString, secretKey);
        if (hash.equals(telegramHash)) {
            // generate jwt
            return new ResponseEntity(HttpStatus.OK);
        }
        return new ResponseEntity(HttpStatus.UNAUTHORIZED);
    }
}
