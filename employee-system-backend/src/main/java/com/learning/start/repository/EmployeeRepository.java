package com.learning.start.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.learning.start.model.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long> { }
