package com.ssau.study.service;

import com.ssau.study.dto.GroupPojo;
import com.ssau.study.dto.StudentPojo;
import com.ssau.study.jpa.GroupRepository;
import com.ssau.study.jpa.StudentRepository;
import com.ssau.study.orm.Group;
import com.ssau.study.orm.Student;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class StudentService {
    private final StudentRepository studentRepository;

    public long count() {
        return studentRepository.count();
    }

    public List<StudentPojo> findAll(String name) {
        System.out.println(name);
        List<StudentPojo> result = new ArrayList<>();
        for (Student student : name == null ? studentRepository.findAll() : studentRepository.selectByName(name)) {
            result.add(StudentPojo.fromEntity(student));
        }
        return result;
    }


    public StudentPojo create(StudentPojo pojo) {
        Student student = StudentPojo.toEntity(pojo);
        return StudentPojo.fromEntity(studentRepository.save(student));
    }

    @Transactional
    public long deleteById(Long id) {
        return studentRepository.deleteAllById(id);
    }

    @Transactional
    public StudentPojo update(StudentPojo pojo) {
        Student student = StudentPojo.toEntity(pojo);
        return StudentPojo.fromEntity(studentRepository.save(student));
    }
}
