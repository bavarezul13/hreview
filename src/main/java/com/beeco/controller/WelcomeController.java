package com.beeco.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.beeco.entities.Address;
import com.beeco.entities.TestSession;
import com.beeco.entities.User;
import com.beeco.services.EmployeeService;
import com.beeco.services.UserService;

@RestController
@CrossOrigin
public class WelcomeController {

	@Autowired
	private UserService userService;
	
	@Autowired
	private TestSession testSession;
	
	@Autowired
	private EmployeeService employeeService;
	
	@GetMapping(path = "save1to1/{addressName}")
	public String save1to1(@PathVariable String addressName){
		employeeService.save(addressName);
		return "saved";
	}
	
	@GetMapping(path = "update1to1")
	public String update1to1(){
		Address address = employeeService.getAddress();
		employeeService.saveWrong(address);
		return "saved";
	}

	@GetMapping(path = "/testSession") // Map ONLY GET Requests
	public @ResponseBody String testSession() {
		testSession.getStrings().add("hello!");
		testSession.setString(testSession.getString().concat("hi!"));
		System.out.println(testSession.stringpublic);
		testSession.stringpublic.concat("hey!");
		return "aaa"+testSession.getStrings().size() + testSession.getString()+testSession.stringpublic;
	}
	
	@GetMapping(path = "/add") // Map ONLY GET Requests
	public @ResponseBody String addNewUser(@RequestParam String name, @RequestParam String email) {
		User n = new User();
		n.setName(name);
		n.setEmail(email);
		userService.save(n);
		return "saved";
	}
	
	@GetMapping(path="/all")
	public @ResponseBody List<User> getAllUsers() {
		// This returns a JSON or XML with the users
		List<User> users =  userService.findAll();
		return users;
	}
	
	@RequestMapping(value = "/login", method = RequestMethod.GET)
	public String login(){
		System.out.println("in login");
		return "login";
	}
}