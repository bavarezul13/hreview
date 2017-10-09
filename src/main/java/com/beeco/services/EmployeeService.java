package com.beeco.services;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.beeco.entities.Address;
import com.beeco.entities.Employee;
import com.beeco.repositories.EmployeeRepository;

@Service
public class EmployeeService {

	@Autowired
	EmployeeRepository employeerepository;
	
	public void save(String addressName){
		Employee employee = new Employee();
		employee.setEmployeeName("Marius");
		Address address = new Address();
		address.setTown(addressName);
		employee.setAddress(address);
		address.getEmployee().add(employee);
		employeerepository.save(employee);
	}
	
	@Transactional
	public void update(){
		Employee employee = employeerepository.findOne(1L);
		Address address = new Address();
		address.setTown("Pitesti");
		employee.setAddress(address);
	}
	
	@Transactional
	public void saveWrong(Address address){
		Employee employee2 = new Employee();
		employee2.setEmployeeName("Vali");
		employee2.setAddress(address);
		address.getEmployee().add(employee2);
		employeerepository.save(employee2);
	}
	
	@Transactional
	public Address getAddress(){
		Employee employee = employeerepository.findOne(1L);
		return employee.getAddress();
	}
}
