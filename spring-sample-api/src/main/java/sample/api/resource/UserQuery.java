package sample.api.resource;

import java.io.Serializable;

public class UserQuery implements Serializable {
    private static final long serialVersionUID = 123456787654323456L;
    String email;
    String finalName;
    String lastName;
    String tel;
    String zip;
    String address;
}
