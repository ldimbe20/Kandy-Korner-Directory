import React, { useEffect, useState } from "react"


export const ProductList = () => {//productList is a componant
    const [products, setProducts] = useState([])//useState-is responsible for setting up a place to store state
    //products is a variable that sets state 
    //setProducts is a variable whose function changes state


    useEffect( //useEffect is a hook that reacts to changes in state
        () => {
            fetch("http://localhost:8088/products?_expand=productType&_sort=productTypeId&_order=asc")
                .then(res => res.json())
                .then((data) => {
                    setProducts(data) 
                })
        },
        [] //this is a dependency array it will change depending on whether there something in between it
    )
//the above use effect will only run once because the dependency array is empty


    return (
        <>
            {
                products.map(
                    (product) => {

                        <h2>Available Candy</h2>

                        return <div key={`product--${product.id}`}>
                            <p> {product.name} cost ${product?.price} 
                            {/* Optional Chaining the ? above asks does this have product if it does then move to name  */}
                              they are a {product.productType?.type||"Unknown" } type of candy</p>  
                             {/* Two vertical pipes means is there product.employee.name if not then post "unknown"  */}
                            
                            </div>
                    }
                )
            }
        </>
    )
}