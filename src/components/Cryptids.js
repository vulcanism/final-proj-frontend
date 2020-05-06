import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

const Cryptids = (props) => {
    console.log(props.cryptids)              
    
        return (            
            <div>
                <h2>Cryptids</h2>
                {props.cryptids.map(cryptid => <li key={cryptid.id}>{cryptid.attributes.name}</li> )}                    
            </div>
        )
    
}
export default Cryptids