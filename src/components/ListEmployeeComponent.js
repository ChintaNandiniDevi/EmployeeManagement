import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {Link} from 'react-router-dom'
import EmployeeService from '../services/EmployeeService'

const ListEmployeeComponent = () => {

    const [employees, setEmployees] = useState([])

    useEffect(() => {
      getAllEmployees();
    }, [])

    const getAllEmployees= () =>{
      EmployeeService.getAllEmployees().then((response) => {
        setEmployees(response.data)
        console.log(response.data);
      }).catch(error =>{
        console.log(error);
      })

    }
    
    const deleteEmployee=(employeeId) =>{
      EmployeeService.deleteEmployee(employeeId).then((response) =>{
        getAllEmployees();
  
      }).catch(error =>{
        console.log(error);
      })
    }

  return (
    <div className="container">
        <h2 className="text-center">Employees Details</h2>
        <Link to="/add-employee" className="btn btn-primary mb-2">Add Employee</Link>
        <table className="table table-bordered table-striped">
          <thead>
            <th>Employee Id</th>
            <th> Name</th>
            <th> mobile Number</th>
            <th>EmailId</th>
            <th>Address</th>
            <th>Gender</th>
            <th>Date Of Birth</th>
            <th>Actions</th>
          </thead>
          <tbody>
            {
              employees.map(
                employee =>
                <tr key= {employee.id}>
                  <td>{employee.id}</td>
                  <td>{employee.name}</td>
                  <td>{employee.mobileNumber}</td>
                  <td>{employee.emailId}</td>
                  <td>{employee.address}</td>
                  <td>{employee.gender}</td>
                  <td>{employee.dateOfBirth}</td>
                  <td>
                    <Link className='btn btn-info' to={`/edit-employee/${employee.id}`}>Update</Link>
                    <button className='btn btn-danger' onClick={() => deleteEmployee(employee.id)} style={{marginLeft:"10px"}}>Delete</button>
                  </td>
                </tr>
              )
            }
          </tbody>

        </table>

    </div>
  )
}

export default ListEmployeeComponent