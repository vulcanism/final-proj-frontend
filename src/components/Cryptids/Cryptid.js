import React from "react";
import SightingsContainer from "../../containers/SightingsContainer"
import {Link} from "react-router-dom"

const Cryptid = (props) => {

    let cryptid = props.cryptids.filter(cryptid => cryptid.id == props.match.params.id)[0]

    return (
        <div>
            <h2>{cryptid ? cryptid.name : null}</h2>
            <h3>{cryptid ? cryptid.size : null} - {cryptid ? cryptid.classification : null}</h3>
            <h4>Add new sighting</h4>
            <SightingsContainer cryptid={cryptid} /><br/>
            {/* <Link className="btn" to={`/cryptids/${props.match.params.id}/edit`}>Edit</Link>             */}
        </div>
    )
}

export default Cryptid