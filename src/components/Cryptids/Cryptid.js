import React from "react";
import SightingsContainer from "../../containers/SightingsContainer"

const Cryptid = (props) => {

    let cryptid = props.cryptids.filter(cryptid => cryptid.id == props.match.params.id)[0]

    return (
        <div>
            <h2>{cryptid ? cryptid.name : null}</h2>
            <SightingsContainer cryptid={cryptid} />
        </div>
    )
}

export default Cryptid