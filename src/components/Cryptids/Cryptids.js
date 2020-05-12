import React from "react";
import Cryptid from "./Cryptid"
import {Route, Link} from "react-router-dom"
import {connect} from "react-redux";

const Cryptids = (props) => {                  
    
        return (            
            <div>
                <h2>Cryptids</h2>
                {props.cryptids.map(cryptid => 
                <li key={cryptid.id}>
                    <Link to={`cryptids/${cryptid.id}`}>{cryptid.name}</Link>
                </li> )}                                    
            </div>
        )
    
}
export default Cryptids