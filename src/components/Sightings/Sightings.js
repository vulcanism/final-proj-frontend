import React from "react";
import {connect} from "react-redux";
import {deleteSighting} from "../../actions/deleteSighting"

const Sightings = (props) => {      
    
    const handleDelete = (sighting) => {
        props.deleteSighting(sighting.id, sighting.cryptid_id)        
    }

    return (
        <div class="container">
            <div class="row">                            
            {props.sightings && props.sightings.map(sighting => 
                <li key={sighting.id}>
                    { (new Date(sighting.date)).toLocaleDateString() } - {sighting.location}<br />
                    Note: {sighting.note}<br />
                    <button onClick={() => handleDelete(sighting)}>Delete</button>                    
                </li>            
            )}            
            </div>
        </div>
    )
}

export default connect(null, {deleteSighting})(Sightings);