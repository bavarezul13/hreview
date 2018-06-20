package com.beeco.controller;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.security.Principal;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.beeco.entities.Address;
import com.beeco.entities.TestSession;
import com.beeco.entities.User;
import com.beeco.services.EmployeeService;
import com.beeco.services.UserService;

@RestController
@CrossOrigin()
public class WelcomeController {

	@Autowired
	private UserService userService;
	
	@Autowired
	private TestSession testSession;
	
	@Autowired
	private EmployeeService employeeService;
	
	@GetMapping("/current")
	  public Principal current(Principal current) {
	    return current;
	  }
	
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
	
	//@PreAuthorize("hasRole('ADMIN')")
	@GetMapping(path = "/secure/add") // Map ONLY GET Requests
	public @ResponseBody String addNewUser(@RequestParam String name, @RequestParam String email, Principal principal) {
		User n = new User();
		n.setName(name);
		n.setEmail(email);
		userService.save(n);
		return "saved";
	}
	
	@GetMapping(path = "/add") // Map ONLY GET Requests
	public @ResponseBody String addDummyUser() {
		User n = new User();
		n.setName("name");
		n.setEmail("email");
		userService.save(n);
		return "saved";
	}
	
	@GetMapping(path="/secure/all")
	public @ResponseBody List<User> getAllUsers() {
		List<User> users =  userService.findAll();
		return users;
	}
	
	@GetMapping(path="/allset")
	public @ResponseBody Set<User> getAllUsersSet() {
		Set<User> users =  userService.findAllSet();
		return users;
	}
	
	@GetMapping(path="/testPersist")
	public @ResponseBody String testPersist() {
		User user = userService.testPersist();
		//userService.testPersist2(user);
		return "tested";
	}
	
	@GetMapping(path="/testConcurrentUpdate")
	public @ResponseBody String testConcurrentUpdate() {
		userService.testConcurrentUpdate();
		return "tested";
	}
	
	@PreAuthorize("hasAuthority('ADMIN')")
	@RequestMapping(value = "/secure/adminPage", method = RequestMethod.GET)
	public String getAdminPage(Principal principal){
		System.out.println("in admin page, principal: " + principal.getName());
		//User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		//System.out.println("in admin page, principal: " + user.getName());
		return "adminPage";
	}
	
	@PreAuthorize("hasAuthority('ADMIN')")
	@RequestMapping(value = "/secure/adminPage2", method = RequestMethod.GET)
	public String getAdminPage2(){
		//System.out.println("in admin page, principal: " + principal.getName());
		User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		System.out.println("in admin page, principal: " + user.getName());
		return "adminPage2";
	}
	
	@GetMapping(path="/simulateAuthetication")
	public @ResponseBody String simulateAuthetication() {
		List<GrantedAuthority> authorities = new ArrayList<GrantedAuthority>();
		authorities.add(new SimpleGrantedAuthority("ADMIN"));
		//UsernamePasswordAuthenticationToken auth =  new UsernamePasswordAuthenticationToken("aaa", "aaa", authorities);
		User user = (User) userService.loadUserByUsername("name1");
		UsernamePasswordAuthenticationToken auth =  new UsernamePasswordAuthenticationToken(user, "aaa", authorities);
		SecurityContextHolder.getContext().setAuthentication(auth);
		return "logged successfully";
	}
	
	@PostMapping("/upload")
    public String handleFileUpload(@RequestParam("file") MultipartFile file) throws IOException {
		byte[] bytes = file.getBytes();
		File file1 = new File(file.getOriginalFilename());
		FileOutputStream fos = new FileOutputStream(file1);
		fos.write(bytes, 0, bytes.length);
		fos.close();
        return "success!!";
    }
	
	@GetMapping("/download")
    public ResponseEntity<InputStreamResource> handleFileDownload() throws IOException {
		File file = new File("F:\\dev\\eclipse_workspace\\hreview-backend\\video_sample.mp4");
		InputStreamResource resource = new InputStreamResource(new FileInputStream(file));
        return ResponseEntity.ok().header("Content-Disposition", "attachment;filename=" + file.getName())
        		  .body(resource);
    }
}