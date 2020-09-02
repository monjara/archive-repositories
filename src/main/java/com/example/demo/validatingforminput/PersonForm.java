package com.example.demo.validatingforminput;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

public class PersonForm {

    @NotNull
    private String name;

    @NotBlank
    private String age;

    public String getAge() {
        return age;
    }

    public String getName() {
        return name;
    }

    public void setAge(String age) {
        this.age = age;
    }

    public void setName(String name) {
        this.name = name;
    }
}
