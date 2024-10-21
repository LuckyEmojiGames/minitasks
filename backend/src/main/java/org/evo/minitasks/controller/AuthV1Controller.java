package org.evo.minitasks.controller;


import org.springframework.boot.web.servlet.server.Session;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1")
public class AuthV1Controller {
    @PostMapping("/auth/token")
    public ResponseEntity validateInitData(
            @RequestParam String checkString,
            @RequestParam String hash
    ) {
        return new ResponseEntity(HttpStatus.OK);
    }
}
