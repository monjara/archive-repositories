package com.example.demo.validatingforminput;

import org.springframework.stereotype.Service;

@Service
public class AddToStrings {

    public void addAAAAToString(PersonForm pf, String str) {
        String AAAA = "AAAA";

        StringBuilder sb = new StringBuilder();

        sb.append(str);
        sb.append(AAAA);

        pf.setName(sb.toString());
    }
}
