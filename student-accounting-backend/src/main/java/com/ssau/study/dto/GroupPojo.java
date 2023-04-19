package com.ssau.study.dto;
import com.ssau.study.orm.Group;
import com.ssau.study.orm.Student;
import lombok.Getter;
import lombok.Setter;
import java.util.ArrayList;
import java.util.List;
@Getter
@Setter
public class GroupPojo {
    private long id;
    private String name;
    private List<StudentPojo> students;
    public static GroupPojo fromEntity(Group group) {
        GroupPojo pojo = new GroupPojo();
        pojo.setId(group.getId());
        pojo.setName(group.getName());
        List<StudentPojo> students = new ArrayList<>();
        pojo.setStudents(students);
        for (Student student : group.getStudents()) {
            students.add(StudentPojo.fromEntity(student));
        }
        return pojo;
    }

    public static Group toEntity(GroupPojo pojo) {
        Group group = new Group();
        group.setId(pojo.getId());
        group.setName(pojo.getName());
        group.setStudents(new ArrayList<>());
        return group;
    }
}
