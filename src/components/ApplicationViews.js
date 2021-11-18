import React from "react"
import { Route } from "react-router-dom"
import { LocationList } from "./locations/locations"
import { ProductList } from "./productlist/productlist"
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


            
        </>
        // the routes are listening for the /location event. When the URL matches the route path it will display locationList
    ) 
}