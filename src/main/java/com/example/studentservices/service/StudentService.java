package com.example.studentservices.service;

import com.example.studentservices.model.Student;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class StudentService {

    private static List<Student> student = new ArrayList<>();
}
