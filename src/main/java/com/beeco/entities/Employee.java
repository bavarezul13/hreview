package com.beeco.entities;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "Employees")
public class Employee {
	
	//Address e owner, nu Employee

    private String employeeName;
    
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
	private long employeeId;
    
	@OneToOne(cascade  = CascadeType.ALL)
	@JoinColumn(name = "address_id")
    private Address address;
	
	public long getEmployeeId() {
		return employeeId;
	}
	public void setEmployeeId(long employeeId) {
		this.employeeId = employeeId;
	}
      
    public String getEmployeeName()  
    {  
        return employeeName;  
    }  
    public void setEmployeeName(String employeeName)  
    {  
        this.employeeName = employeeName;  
    }
	public Address getAddress() {
		return address;
	}
	public void setAddress(Address address) {
		this.address = address;
	}
	
}