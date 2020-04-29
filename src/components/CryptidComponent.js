import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import Cryptid from "./CryptidShow"

const CryptidComponent = (props) => {
    
        return (
            <div>
                <h2>Cryptids</h2>
                    {props.cryptids.map(cryptid =>                        
                            <div key={cryptid.id}><Cryptid cryptid={cryptid} /></div>
                    )}                
            </div>
        )
    
}

export default connect()(CryptidComponent)