package com.example.demo.service;

import com.example.demo.entity.User;
import com.example.demo.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserMapper userMapper;

    public User findByUsername(String username) {
        return userMapper.findByUsername(username);
    }

    public boolean validatePassword(User user, String inputPassword) {
        // 简单密码验证，实际项目中应该使用加密验证
        return user != null && user.getPassword().equals(inputPassword);
    }
}