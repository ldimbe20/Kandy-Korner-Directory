import React from "react"
import { Route } from "react-router-dom"
import { LocationList } from "./locations/locations"
import { ProductList } from "./productlist/productlist"
import { EmployeeList } from "./employees/employees"
import { EmployeeForm } from "./employees/employeeForm"
// import { ProductList } from "./productlist/productlist"

export const ApplicationViews = () => {
    return (
        <>
            <Route path="/locations">
                <LocationList />
            </Route>

            <Route path="/products">
                <ProductList />
            </Route>

            <Route exact path="/employees">
                <EmployeeList />
            </Route>

            <Route path="/employees/create">
                <EmployeeForm />
            </Route>


    
            
        </>
        // the routes are listening for the /location event. When the URL matches the route path it will display locationList
    ) 
}


