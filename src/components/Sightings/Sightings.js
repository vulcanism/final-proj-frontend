import React from "react";

const Sightings = (props) => {

    const handleDelete = (sighting) => {
        
    }

    return (
        <div>
            {props.sightings && props.sightings.map(sighting => 
                <li key={sighting.id}>
                    {sighting.date} - {sighting.location}
                    <button onClick={handleDelete}>Delete</button>                    
                </li>            
            )}
        </div>
    )
}

export default Sightings;