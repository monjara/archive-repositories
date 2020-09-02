package com.example.demo.validatingforminput;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class ApiController {

    @Autowired
    AddToStrings ats;

    @RequestMapping(method = RequestMethod.POST, value = "/")
    public PersonForm checkPersonInfo(@RequestBody PersonForm personForm) {

        ats.addAAAAToString(personForm, personForm.getName());
        return personForm;

    }
}
