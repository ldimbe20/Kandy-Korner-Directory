import React, { useState } from "react"
import { useHistory } from "react-router-dom"


export const PurchaseForm = () => {

    const [purchase, update] = useState({  //useState will be an object below are placeholders that will be filled in when update is invoked
        id:"",
        customerId:"", 
        productLocation:true,
        timestamp: "",

    })
    
    const makePurchase = (evt) => {  //this function is using the state, useState, to create an object to store to API
            evt.preventDefault()
            const newPurchase ={  //creating an object to save 
                 
                customerId: purchase.customerId, //getting information from state
                productLocation: purchase.productLocationsId,
                timestamp: purchase.timestamp,
                
            
    }//we want to send above object to API
   
   const fetchOption = {
            method: "POST", //posting to the API using POst method
            headers: {
                "Content-Type": "application/json" 
           },
           body:JSON.stringify(newPurchase) // sending the body of the object new purchase, can't send javascript so need to stringify 
        }

         return fetch ("http://localhost:8088/purchase", fetchOption)
            .then(response => response.json())
            .then (() => {
               
        })

   }
   
   
    


    return (
        <form className="purchaseForm">
            <h2 className="purchaseForm__title"> Purchase</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="purchaseName">Purchase:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Purchase Name"
                         onChange={ //onChange is like an event listener that listens for a change and records it- we are listening for the change in name here
                             (evt) =>{
                                 const copy ={...purchase}     //using object spread operator to copy the initual state
                                 copy.name = evt.target.value  //making the new description = the value of someone typing into the name field
                                 update(copy)}      
                         }/>
                         {/* above isnow that copy is updated with new data it will take that copy to update from useState hook */}
                </div>
            </fieldset>
           
            <fieldset>
                <div className="form-group">
                    <label htmlFor="price">Price:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Purchase Price"
                         onChange={ //onChange is like an event listener that listens for a change and records it- we are listening for the change in description here
                             (evt) =>{
                                 const copy ={...purchase}     //using object spread operator to copy the initual state
                                 copy.price = evt.target.value  //making the new description = the value of someone typing into the description field
                                 update(copy)}      
                         }/>
                         {/* above isnow that copy is updated with new data it will take that copy to update from useState hook */}
                </div>
            </fieldset>
        
            <button className="btn btn-primary" onClick={makePurchase}>
                Submit Purchase
            </button>
        </form>
    )
}