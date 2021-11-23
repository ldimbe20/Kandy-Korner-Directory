import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"



export const EmployeeList = () => {
    const [employees, setEmployee] = useState([]) //useState is hook that is a placeholder for state
    //employee is an variable setEmployee is a variable whose functions will set state for employees if invoked
    const history = useHistory()
    
    useEffect(
        () => {
            fetch("http://localhost:8088/employees")
                .then(res => res.json())
                .then((data) => {
                    setEmployee(data)
                })
        },
        []
    )



    return (
        <>
         <div>
         <button onClick={() => history.push("/employees/create")}>Pick Employee</button> 
         {/* once this button is clicked, or the rendered version below is clicked, it will bring you to the EmployeeForm on applicationsviews. */}
        </div> 
            
            <div>
                <h2>Employees</h2>
            </div>
            {
                employees.map(
                    (employee) => {
                        return <p key={`employee--${employee.id}`}>{employee.name}</p>  //the key={`employee--  is used for React as a unique identifier
                    }
                )
            }
        </>
    )
}