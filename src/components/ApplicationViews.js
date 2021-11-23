import React from "react"
import { Route } from "react-router-dom"
import { LocationList } from "./locations/locations"
import { ProductList } from "./productlist/productlist"
import { EmployeeList } from "./employees/employees"
import { EmployeeForm } from "./employees/employeeForm"
import { CustomerList } from "./customers/customers"
import { PurchaseForm } from "./purchases/purchases"


export const ApplicationViews = () => {
    return (
        <>
            <Route path="/locations">
                <LocationList />
            </Route>

            <Route exact path="/products">
                <ProductList />
            </Route>

            <Route exact path="/employees">
                <EmployeeList />
            </Route>

        
            <Route path="/customers">
                <CustomerList />
            </Route>

            <Route path="/employees/create"> 
            {/* once employee is clicked on employee.js it brings you to employeeform */}
                <EmployeeForm />
            </Route>

            <Route path="/products/create"> 
            {/* once employee is clicked on employee.js it brings you to employeeform */}
                <PurchaseForm />
            </Route>

            


    
            
        </>
        // the routes are listening for the /location event. When the URL matches the route path it will display locationList
    ) 
}


