package com.ssau.study.controller;

import com.ssau.study.annotations.OnlyAdmin;
import com.ssau.study.dto.StudentPojo;
import com.ssau.study.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v2/students")
public class StudentController {
    @Autowired
    private StudentService studentService;

    @GetMapping("/count")
    public long count() {
        return studentService.count();
    }

    @GetMapping
    public List<StudentPojo> findAll() {
        return studentService.findAll(null);
    }


    @GetMapping("/{name}")
    public List<StudentPojo> findAll(@PathVariable String name) {
        return studentService.findAll(name);
    }

    @OnlyAdmin
    @PostMapping
    public StudentPojo create(StudentPojo student) {
        return studentService.create(student);
    }

    @OnlyAdmin
    @DeleteMapping("/{id}")
    public long deleteById(@PathVariable long id) {
        return studentService.deleteById(id);
    }

    @OnlyAdmin
    @PutMapping
    public StudentPojo update(@RequestBody StudentPojo pojo) {
        return studentService.update(pojo);
    }

}
