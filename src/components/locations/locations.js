import React, { useEffect, useState } from "react"



export const LocationList = () => {
    const [locations, setLocation] = useState([])
    

    useEffect(
        () => {
            fetch("http://localhost:8088/locations")
                .then(res => res.json())
                .then((data) => {
                    setLocation(data)
                })
        },
        []
    )



    return (
        <>
            <div>
                <h2>Locations</h2>
            </div>
            {
                locations.map(
                    (location) => {
                        return <p key={`location--${location.id}`}>{location.address}</p>  //the key={`employee--  is used for React as a unique identifier
                    }
                )
            }
        </>
    )
}