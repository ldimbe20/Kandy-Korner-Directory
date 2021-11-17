
import { LocationList } from "./locations/locations"
import { ProductList } from "./productlist/productlist"


//what state do I want this componant to render

export const KandyKorner = () => { 

    return (
    <>
        
        <h1>Service Tickets</h1>
        <LocationList />
        <h1>Candy Types</h1>
        <ProductList />


       
    </>

    )
} 

// the return of this function is html code or JSX 