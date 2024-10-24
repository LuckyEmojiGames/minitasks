package org.evo.minitasks.service;

import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.evo.minitasks.model.User;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {

    private final List<User> users;

    public UserService() {
        this.users = List.of();
    }

    public Optional<User> getByLogin(@NonNull String login) {
        return users.stream()
                .filter(user -> login.equals(user.getTelegramId()))
                .findFirst();
    }

}
