import React from "react";
import {connect} from "react-redux"

class SightingForm extends React.Component {

    render() {
        return (
            <div>
                <form>
                    <label>Date:</label>
                    <label>Location:</label>
                    <label>Note:</label>
                </form>
            </div>
        )
    }
}

export default connect()(SightingForm);