package com.cap.emp.repository;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.cap.emp.entities.Employee;


@Repository
public interface EmployeeRepository extends  JpaRepository<Employee, Integer>{

}
