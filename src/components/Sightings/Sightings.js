import React from "react";

const Sightings = (props) => {
    return (
        <div>
            {props.sightings && props.sightings.map(sighting => 
                <li key={sighting.id}>{sighting.date}</li>            
            )}
        </div>
    )
}

export default Sightings;