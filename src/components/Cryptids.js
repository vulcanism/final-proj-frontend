import React from "react";
import Cryptid from "./Cryptid"
import {connect} from "react-redux";
import {Link} from "react-router-dom";

const Cryptids = (props) => {                  
    
        return (            
            <div>
                <h2>Cryptids</h2>
                {props.cryptids.map(cryptid => 
                <div key={cryptid.id}><Cryptid cryptid={cryptid}/></div> )}                    
            </div>
        )
    
}
export default Cryptids