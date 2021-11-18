
import {ApplicationViews} from "./ApplicationViews"
import { NavBar } from "./nav/NavBar"


//what state do I want this componant to render

export const KandyKorner = () => { 

    return (
    <>
        <NavBar />
        <h2>Kandy Korner</h2>
        <ApplicationViews />
        
     
    </>

    )
} 

// the return of this function is in JSX code which allows us to write HTML directly in react