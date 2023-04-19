package com.ssau.study.jpa;
import com.ssau.study.orm.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.util.Date;
import java.util.List;
public interface StudentRepository extends JpaRepository<Student, Long> {
    @Query(value = "select * from public.students where name ilike '%' || :name || '%'", nativeQuery = true)
    List<Student> selectByName(String name);

    long deleteAllById(Long id);

//    @Modifying
//    @Query(value = "UPDATE public.students SET id=:id, name=:name, birthdate=:birthdate, number=:number WHERE id=:id", nativeQuery = true)
//    int update(long id, String name, Date birthdate, int number);
}