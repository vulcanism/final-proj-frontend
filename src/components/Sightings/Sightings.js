import React from "react";
import {connect} from "react-redux";
import {deleteSighting} from "../../actions/deleteSighting"

const Sightings = (props) => {      
    
    const handleDelete = (sighting) => {
        props.deleteSighting(sighting.id, sighting.cryptid_id)        
    }

    return (
        <div>            
            {props.sightings && props.sightings.map(sighting => 
                <li key={sighting.id}>
                    { (new Date(sighting.date)).toLocaleDateString() } - {sighting.location}
                    <button onClick={() => handleDelete(sighting)}>Delete</button>                    
                </li>            
            )}
        </div>
    )
}

export default connect(null, {deleteSighting})(Sightings);