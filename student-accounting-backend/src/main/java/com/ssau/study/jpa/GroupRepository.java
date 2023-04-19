package com.ssau.study.jpa;
import com.ssau.study.orm.Group;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
public interface GroupRepository extends JpaRepository<Group, Long> {
    List<Group> findAllByNameContainingIgnoreCase(String name);

    long deleteAllById(Long id);

}
