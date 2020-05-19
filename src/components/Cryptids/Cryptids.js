import React from "react";
import Cryptid from "./Cryptid"
import {Route, Link} from "react-router-dom"
import {connect} from "react-redux";

const Cryptids = (props) => {                  
    
        return (            
            <div>
                <h3>Cryptids</h3>
                <ul>
                {props.cryptids.map(cryptid => 
                <li key={cryptid.id}>
                    <Link to={`cryptids/${cryptid.id}`}>{cryptid.name}</Link>
                </li> )}
                </ul>                                                    
            </div>
        )
    
}
export default Cryptids