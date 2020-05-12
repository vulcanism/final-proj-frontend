import React from "react";
import SightingForm from "../components/Sightings/SightingForm"
import Sightings from "../components/Sightings/Sightings"

class SightingsContainer extends React.Component {

    render() {
        return (
            <div>
                <SightingForm/>
                <Sightings sightings={this.props.cryptid && this.props.cryptid.sightings}/>
            </div>
        )
    }

}

export default SightingsContainer