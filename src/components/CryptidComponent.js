import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

class CryptidComponent extends React.Component {
    render() {
        return (
            <div>
                <h2>Cryptids</h2>
                    {this.props.cryptids.map(cryptid =>
                        <div key={cryptid.id}>
                            <Link to={`/cryptids/${cryptid.id}`}><h3>{cryptid.name}</h3></Link>
                        </div>)}                
            </div>
        )
    }
}

export default connect()(CryptidComponent)