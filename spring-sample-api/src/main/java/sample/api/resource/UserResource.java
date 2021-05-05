package sample.api.resource;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.io.Serializable;

public class UserResource implements Serializable {
    private static final long serialVersionUID = 123456789087654323456L;

    @JsonIgnore
    String password;

    @JsonProperty("firstName")
    String firstName;


    @JsonProperty("lastName")
    String lastName;



}
