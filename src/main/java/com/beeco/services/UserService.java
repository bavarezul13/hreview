package com.beeco.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import com.beeco.entities.User;
import com.beeco.repositories.UserRepository;

@Service
public class UserService {

	@Autowired
	UserRepository userRepo;
	
	public void save(User user){
		userRepo.save(user);
	}
	
	@Cacheable("users")
	public List<User> findAll(){
		return userRepo.findAll();
	}
}