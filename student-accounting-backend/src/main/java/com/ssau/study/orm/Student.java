package com.ssau.study.orm;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Entity
@Table(name = "students", schema = "public")
@Getter
@Setter
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;


    private String name;

    @Temporal(value = TemporalType.DATE)
    private Date birthdate;

    private int number;

    @ManyToOne
    @JoinColumn(name = "group_id", updatable = false, foreignKey = @ForeignKey(ConstraintMode.NO_CONSTRAINT))
    private Group group;
}


