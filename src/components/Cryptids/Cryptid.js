import React from "react";

const Cryptid = (props) => {

    let cryptid = props.cryptids.filter(cryptid => cryptid.id == props.match.params.id)[0]

    return (
        <div>
            <h2>{cryptid ? cryptid.name : null}</h2>
        </div>
    )
}

export default Cryptid