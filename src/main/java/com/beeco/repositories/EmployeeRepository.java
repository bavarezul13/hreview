package com.beeco.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.beeco.entities.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long>{

}
