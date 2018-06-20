package com.beeco.repositories;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;

import com.beeco.entities.User;

public interface UserRepository extends JpaRepository<User, Integer>{

	User findOneByName(String Name);

	Set<User> findByRoleIsNotNull();
}