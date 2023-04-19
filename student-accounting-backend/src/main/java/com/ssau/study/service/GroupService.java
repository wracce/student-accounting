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
public class GroupService {
    private final GroupRepository groupRepository;
    private final StudentRepository studentRepository;


    public long count() {
        return groupRepository.count();
    }

    public List<GroupPojo> findAll(String name) {
        List<GroupPojo> result = new ArrayList<>();
        for (Group group : name == null ? groupRepository.findAll() : groupRepository.findAllByNameContainingIgnoreCase(name)) {
            result.add(GroupPojo.fromEntity(group));
        }
        return result;
    }

    public GroupPojo findAllById(long id) {
        return GroupPojo.fromEntity(groupRepository.findById(id).orElseThrow());
    }

    public StudentPojo create(long groupId, StudentPojo pojo) {
        Student student = StudentPojo.toEntity(pojo);
        student.setGroup(groupRepository.findById(groupId).orElseThrow());
        return StudentPojo.fromEntity(studentRepository.save(student));
    }

    public GroupPojo create(GroupPojo pojo) {
        Group group = GroupPojo.toEntity(pojo);
        return GroupPojo.fromEntity(groupRepository.save(group));
    }

    @Transactional
    public long deleteById(Long id) {
        return groupRepository.deleteAllById(id);
    }

    @Transactional
    public GroupPojo update(GroupPojo pojo) {
        Group group = groupRepository.findById(pojo.getId()).orElseThrow();
        group.setName(pojo.getName());
        return GroupPojo.fromEntity(groupRepository.save(group));
    }
}
