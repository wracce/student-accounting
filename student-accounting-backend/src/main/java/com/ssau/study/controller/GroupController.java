package com.ssau.study.controller;
import com.ssau.study.annotations.OnlyAdmin;
import com.ssau.study.dto.GroupPojo;
import com.ssau.study.dto.StudentPojo;
import com.ssau.study.service.GroupService;
import jakarta.websocket.server.PathParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import java.util.List;
@RestController
@RequestMapping("/api/v2/groups")
public class GroupController {
    @Autowired
    private GroupService groupService;
    
    @GetMapping("/count")
    public long count() {
        return groupService.count();
    }


    @GetMapping
    public List<GroupPojo> findAll() {
        return groupService.findAll(null);
    }

    @OnlyAdmin
    @GetMapping("/name/{name}")
    public List<GroupPojo> findAllByName(@PathVariable String name) {
        return groupService.findAll(name);
    }


    public GroupPojo findAllById(@PathVariable long id) {
        return groupService.findAllById(id);
    }

    @OnlyAdmin
    @PostMapping("/{groupId}")
    public StudentPojo createStudent(@PathVariable long groupId, @RequestBody StudentPojo pojo) {
        return groupService.create(groupId, pojo);
    }

    @OnlyAdmin
    @PostMapping
    public GroupPojo create(@RequestBody GroupPojo pojo) {
        return groupService.create(pojo);
    }

    @OnlyAdmin
    @DeleteMapping("/{id}")
    public long deleteById(@PathVariable long id) {
        return groupService.deleteById(id);
    }


    @OnlyAdmin
    @PutMapping
    public GroupPojo update(@RequestBody GroupPojo pojo) {
        return groupService.update(pojo);
    }
}
