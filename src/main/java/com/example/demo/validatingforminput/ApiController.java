package com.example.demo.validatingforminput;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpMessage;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
public class ApiController {

    @Autowired
    AddToStrings ats;

    @RequestMapping(method = RequestMethod.POST, value = "/")
    public ResponseEntity<Map<String, String>> checkPersonInfo(@Validated @RequestBody PersonForm personForm, BindingResult bindingResult) {

        Map<String, String> message = new HashMap<>();
        if (bindingResult.hasFieldErrors()) {
            message.put("validation", "error");
            return new ResponseEntity<>(message, HttpStatus.BAD_REQUEST);
        } else {
            message.put("validation", "success");
            return new ResponseEntity<>(message, HttpStatus.OK);
        }
    }
}
