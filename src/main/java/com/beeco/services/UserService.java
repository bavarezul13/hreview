package com.beeco.services;

import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.beeco.entities.User;
import com.beeco.repositories.UserRepository;

@Service
public class UserService implements UserDetailsService {

	@Autowired
	UserRepository userRepo;
	
	@Autowired
	PasswordEncoder passwordEncoder;
	
	public void save(User user){
		userRepo.save(user);
	}
	
	@Cacheable("users")
	@Transactional
	public List<User> findAll(){
		List<User> allUsers = userRepo.findAll();
		allUsers.forEach(user -> System.out.println(user.getReviews().size()));
		return allUsers;
	}
	
	public Set<User> findAllSet(){
		return userRepo.findByRoleIsNotNull();
	}

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		User user = userRepo.findOneByName(username);
		if (user == null) {
            throw new UsernameNotFoundException(username);
        }
		return user;
	}

	@Transactional
	public User testPersist() {
	//le salveaza pe ambele, desi equals=true
	//daca user2=user1 si apoi setez ceva pe user2, la save(user2) face update, nu tot insert
	/*User user1 = new User();
	user1.setName("persist1");
	user1.setPassword("bbb");
	User user2 = new User();
	user2.setName("persist1");
	user2.setPassword("bbb");
	user2.setRole(Role.USER);
	System.out.println("Obiecte egale: " + user1.equals(user2));
	userRepo.save(user1);
	userRepo.save(user2);*/
		
	User user1 = new User();
	user1.setName("persist1");
	user1.setPassword("bbb");
	user1.setPassword(passwordEncoder.encode("aaa"));
	userRepo.save(user1);//face persist in spate, asta asigneaza id la user1
	return user1;
	}
	
	@Transactional
	public void testPersist2(User user1) {
		/*user1.setName("persist2");//user1 a venit cu id, acest id exista in DB
		User user2 = userRepo.save(user1);//deci save face merge, user2 devine managed, nu user1
		user1.setName("persist3");//user1 nu mai e manageuit, nu are niciun efect
		user2.setName("persist4");//user2 e manageuit, se face uodate
		*/
		User user = new User();
		user.setId(37);//chiar daca e user nou, are acelasi id cu cel din DB, asa ca face merge
		user.setName("newUser");
		userRepo.save(user);
	}

	@Transactional(propagation=Propagation.REQUIRES_NEW, isolation = Isolation.READ_COMMITTED)
	public void testConcurrentUpdate() {
		User user = userRepo.findOne(1);
		user.setAge(user.getAge() - 1);
		System.out.println("Thread : " + Thread.currentThread().getName() + "has set age = " + user.getAge());
		userRepo.save(user);
		try {
			Thread.sleep(10000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}

}