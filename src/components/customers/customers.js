import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"



export const CustomerList = () => {
    const [customers, setCustomer] = useState([]) //useState is hook that is a placeholder for state
    //customer is an variable setCustomer is a variable whose functions will set state for customers if invoked
    const history = useHistory()
    
    useEffect(
        () => {
            fetch("http://localhost:8088/customers")
                .then(res => res.json())
                .then((data) => {
                    setCustomer(data)
                })
        },
        []
    )



    return (
        <>
         <div>
         {/* <button onClick={() => history.push("/customers")}>Pick Customer</button> */}
        </div> 
            
            <div>
                <h2>Customers</h2>
            </div>
            {
                customers.map(
                    (customer) => {
                        return <p key={`customer--${customer.id}`}>{customer.name}</p>  //the key={`employee--  is used for React as a unique identifier
                    }
                )
            }
        </>
    )
}