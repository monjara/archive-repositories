package com.example.demo.validatingforminput;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
public class ApiController {

    @Autowired
    AddToStrings ats;

    @PostMapping("/")
    public String checkPersonInfo(@Valid PersonForm personForm, BindingResult bindingResult) {

        if (bindingResult.hasErrors()) {
            ats.addAAAAToString(personForm, personForm.getName());
            return "error" + personForm.getName();
        } else {
            ats.addAAAAToString(personForm, personForm.getName());
            return "success" + personForm.getName();
        }
    }
}
