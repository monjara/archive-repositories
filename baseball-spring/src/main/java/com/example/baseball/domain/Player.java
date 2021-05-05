package com.example.baseball.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Player {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String name;
    private Integer age;
    private String team;
    private String position;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id =id;
    }

    public String getName() {
        return name;
    }

    public void setName() {
        this.name = name;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge() {
        this.age = age;
    }

    public String getTeam() {
        return team;
    }

    public void setTeam() {
        this.team = team;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition() {
        this.position = position;
    }

    @Override
    public String toString() {
        return "Player [id=" + id + ", name =" + name + ", age =" + age + ", team =" + team + ", position =" + position + "]";
    }
}
