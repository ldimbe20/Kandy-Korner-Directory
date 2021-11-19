import React, { useState } from "react"
import { useHistory } from "react-router-dom"

export const EmployeeForm = () => {
    
    const [employee, update] = useState({ 
        name:"",
        location:"", 
        manager:true,
        fulltime: true, 
        rate: "",
       

    })

    const history =  useHistory()

    const saveEmployee = (evt) => {  //this function is using the state, useState, to create an object to store to API
        evt.preventDefault()
        const newEmployee ={  //creating an object to save 
            name: employee.name, //getting information from state
            location: employee.location.address, 
            fulltime: employee.fulltime, 
            rate: employee.hourlyRate,
            manager: employee.manager
            
            
            
    } //we want to send above object to API
   
   const fetchOption = {
            method: "POST", //posting to the API using POst method
            headers: {
                "Content-Type": "application/json" 
           },
           body:JSON.stringify(newEmployee) // sending the body of the object new employee, can't send javascript so need to stringify 
        }

         return fetch ("http://localhost:8088/employees?_expand=location", fetchOption)
            .then(response => response.json())
            .then (() => {
                history.push("/employees")
        })

   }
   
   
    


    return (
        <form className="employeeForm">
            <h2 className="employeeForm__title"> Employee</h2>
            <fieldset>
    {/* Employee */}
                <div className="form-group">
                    <label htmlFor="employeeName">Employee:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Employee Name"
                         onChange={ //onChange is like an event listener that listens for a change and records it- we are listening for the change in description here
                             (evt) =>{
                                 const copy ={...employee}     //using object spread operator to copy the initual state
                                 copy.name = evt.target.value  //making the new description = the value of someone typing into the description field
                                 update(copy)}      
                         }/>
                         {/* above isnow that copy is updated with new data it will take that copy to update from useState hook */}
                </div>   
    {/* LOCATION */}
                <div className="form-group">
                    <label htmlFor="locationName">Location:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Location Name"
                         onChange={ //onChange is like an event listener that listens for a change and records it- we are listening for the change in description here
                             (evt) =>{
                                 const copy ={...employee}     //using object spread operator to copy the initual state
                                 copy.location = evt.target.value  //making the new description = the value of someone typing into the description field
                                 update(copy)}      
                         }/>
                         {/* above isnow that copy is updated with new data it will take that copy to update from useState hook */}
                </div>  
    {/* MANAGER */}
                <div className="form-group">
                    <label htmlFor="manager">Manager:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Manager yes or no"
                         onChange={ //onChange is like an event listener that listens for a change and records it- we are listening for the change in description here
                             (evt) =>{
                                 const copy ={...employee}     //using object spread operator to copy the initual state
                                 copy.manager = evt.target.value  //making the new description = the value of someone typing into the description field
                                 update(copy)}      
                         }/>
                         {/* above isnow that copy is updated with new data it will take that copy to update from useState hook */}
                </div>  
    {/* FULLTIME */}
                <div className="form-group">
                    <label htmlFor="Fulltime">Fulltime:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Full-time"
                         onChange={ //onChange is like an event listener that listens for a change and records it- we are listening for the change in description here
                             (evt) =>{
                                 const copy ={...employee}     //using object spread operator to copy the initual state
                                 copy.fulltime = evt.target.value  //making the new description = the value of someone typing into the description field
                                 update(copy)}      
                         }/>
                         {/* above isnow that copy is updated with new data it will take that copy to update from useState hook */}
                </div>  
     
    {/* HOURLYRATE */}
                <div className="form-group">
                    <label htmlFor="HourlyRate">Hourly Rate:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Hourly Rate"
                         onChange={ //onChange is like an event listener that listens for a change and records it- we are listening for the change in description here
                             (evt) =>{
                                 const copy ={...employee}     //using object spread operator to copy the initual state
                                 copy.rate = evt.target.value  //making the new description = the value of someone typing into the description field
                                 update(copy)}      
                         }/>
                         {/* above isnow that copy is updated with new data it will take that copy to update from useState hook */}
                </div>  
     
   
     
            </fieldset> 
            
  
            <button className="btn btn-primary" onClick={saveEmployee}>
                Submit Job
            </button>
        </form>
    )
}
