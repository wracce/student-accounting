package com.ssau.study.orm;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import java.util.List;
@Entity
@Table(name = "groups", schema = "public", uniqueConstraints = { @UniqueConstraint(columnNames = "name") })
@Getter
@Setter
public class Group {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(name = "name", columnDefinition = "text", length = 100, nullable = false, unique = true)
    private String name;
    @OneToMany(mappedBy = "group", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<Student> students;
}
