package com.ssau.study.controller;

import com.ssau.study.dto.LoginForm;
import com.ssau.study.orm.UserRole;
import com.ssau.study.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/login")
    public List<UserRole> login(@RequestBody String username) {
        return authService.login(username);
    }

    @PostMapping("/register")
    public List<UserRole> register(@RequestBody LoginForm loginForm) {
        return authService.register(loginForm.getUsername(), loginForm.getPassword());
    }
}
