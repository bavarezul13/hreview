package com.beeco.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.beeco.entities.User;

public interface UserRepository extends JpaRepository<User, Long>{

}