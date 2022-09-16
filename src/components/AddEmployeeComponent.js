import React from 'react'
import { useState, useEffect } from 'react'
import {Link, useNavigate , useParams} from 'react-router-dom';
import EmployeeService from '../services/EmployeeService'

const AddEmployeeComponent = () => {

    const [name, setName]= useState('')
    const [mobileNumber, setMobileNumber]= useState('')
    const [emailId, setEmailId]= useState('')
    const [address, setAddress]= useState('')
    const [gender, setGender]= useState('')
    const [dateOfBirth, setDateOfBirth]= useState('')
    const navigate = useNavigate();
   const {id}=useParams();

    const saveOrUpdateEmployee =(e) =>{
        e.preventDefault();

        const employee ={name, mobileNumber, emailId, address, gender, dateOfBirth}

        if(id){
            EmployeeService.updateEmployee(id, employee).then((response)=>{
              navigate('/employees')  
            }).catch(error =>{
                console.log(error)
            })
        }else{
        EmployeeService.createEmployee(employee).then((response) =>{
            console.log(response.data);
            navigate('/employees');
        }).catch(error =>{
            console.log(error.response.data)
        })
    }
}

    useEffect(() => {
       EmployeeService.getEmployeeById(id).then((response) =>{
           setName(response.data.name)
           setMobileNumber(response.data.mobileNumber)
           setEmailId(response.data.emailId)
           setAddress(response.data.address)
           setGender(response.data.gender)
           setDateOfBirth(response.data.dateOfBirth)
       }).catch(error =>{
           console.log(error)
       })
    }, [])
    
   const  title=()=>{
      if(id){
          return <h2 className='text-center'>Update Employee</h2>
      } 
      else{
        return <h2 className='text-center'>Add Employee</h2>
      } 
    }


  return (
      <div>
          <br/>
          <br/>
    <div className="container">
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
                {
                    title()
                }
                <div className='card-body'>
                    <form>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Name</label>
                            <input
                              type="text"
                              placeholder='Enter Name'
                              name="ename"
                              className='form-control'
                              value={name}
                              onChange= {(e) =>setName(e.target.value)}
                            ></input>
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Mobile Number</label>
                            <input
                              type="text"
                              placeholder='Enter Mobile NUmber'
                              name="mobileNumber"
                              className='form-control'
                              value={mobileNumber}
                              onChange= {(e) =>setMobileNumber(e.target.value)}
                            ></input>
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Email id</label>
                            <input
                              type="text"
                              placeholder='Enter Email-id'
                              name="emailId"
                              className='form-control'
                              value={emailId}
                              onChange= {(e) =>setEmailId(e.target.value)}
                            ></input>
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Address</label>
                            <input
                              type="text"
                              placeholder='Enter address'
                              name="address"
                              className='form-control'
                              value={address}
                              onChange= {(e) =>setAddress(e.target.value)}
                            ></input>
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Gender</label>
                            <input
                              type="text"
                              placeholder='Enter Gender'
                              name="gender"
                              className='form-control'
                              value={gender}
                              onChange= {(e) =>setGender(e.target.value)}
                            ></input>
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Date Of Birth</label>
                            <input
                              type="text"
                              placeholder='Enter Date Of Birth'
                              name="dateOfBirth"
                              className='form-control'
                              value={dateOfBirth}
                              onChange= {(e) =>setDateOfBirth(e.target.value)}
                            ></input>
                        </div>

                        <button className='btn btn-success' onClick={(e) => saveOrUpdateEmployee(e)}>Save</button>
    
                        <Link to="/employees" className="btn btn-danger"> Cancel </Link>
                    </form>

                </div>

            </div>

        </div>
    </div>
    </div>
  )
}

export default AddEmployeeComponent