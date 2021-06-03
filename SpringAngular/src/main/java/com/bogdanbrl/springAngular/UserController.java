package com.bogdanbrl.springAngular;

import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin (origins = "http://localhost:4200")
public class UserController {

	// standard constructors

	private final UserRepository userRepository;

	public UserController(UserRepository userRepository) {
		this.userRepository = userRepository;
	}

	@GetMapping ("/users")
	public Iterable<User> getUsers() {
		return userRepository.findAll();
	}

	@PostMapping ("/users")
	void addUser(@RequestBody User user) {
		userRepository.save(user);
	}
}
