package org.evo.minitasks.model;


import jakarta.persistence.*;
import lombok.Data;

import java.util.Set;

@Entity
@Table(name = "users")
@Data
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    private String telegramId;
    private String firstName;
    private String lastName;
    private boolean isPremium;
    private Set<Role> roles;

}
