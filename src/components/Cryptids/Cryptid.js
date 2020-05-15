import React from "react";
import SightingsContainer from "../../containers/SightingsContainer"
import CryptidEdit from "./CryptidEdit"

const Cryptid = (props) => {

    let cryptid = props.cryptids.filter(cryptid => cryptid.id == props.match.params.id)[0]

    return (
        <div>
            <h2>{cryptid ? cryptid.name : null}</h2>
            <h3>{cryptid ? cryptid.size : null} - {cryptid ? cryptid.classification : null}</h3>
            <h4>Add new sighting</h4>
            <SightingsContainer cryptid={cryptid} /><br/>
            <CryptidEdit />
        </div>
    )
}

export default Cryptid