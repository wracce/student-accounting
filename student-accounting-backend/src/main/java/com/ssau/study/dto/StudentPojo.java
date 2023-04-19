package com.ssau.study.dto;
import com.ssau.study.orm.Student;
import lombok.Getter;
import lombok.Setter;
import java.util.Date;
@Getter
@Setter
public class StudentPojo {
    private long id;
    private String name;
    private Date birthdate;
    private int number;
    public static StudentPojo fromEntity(Student student) {
        StudentPojo pojo = new StudentPojo();
        pojo.setId(student.getId());
        pojo.setName(student.getName());
        pojo.setBirthdate(student.getBirthdate());
        pojo.setNumber(student.getNumber());
        return pojo;
    }
    public static Student toEntity(StudentPojo pojo) {
        Student student = new Student();
        student.setId(pojo.getId());
        student.setName(pojo.getName());
        student.setBirthdate(pojo.getBirthdate());
        student.setNumber(pojo.getNumber());
        return student;
    }
}
