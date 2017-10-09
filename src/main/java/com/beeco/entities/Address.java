package com.beeco.entities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;


@Entity
@Table(name = "Addresses")
public class Address {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long addressId;
	
	@Column(nullable=false)
	private String town;
	
	@OneToMany(mappedBy = "address",cascade = CascadeType.ALL)
	private List<Employee> employee = new ArrayList<>();

	public long getAddressId() {
		return addressId;
	}

	public void setAddressId(long addressId) {
		this.addressId = addressId;
	}

	public String getTown() {
		return town;
	}

	public void setTown(String town) {
		this.town = town;
	}

	public List<Employee> getEmployee() {
		return employee;
	}

	public void setEmployee(List<Employee> employee) {
		this.employee = employee;
	}
		
}