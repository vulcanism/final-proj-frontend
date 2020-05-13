import React from "react";
import {connect} from "react-redux"

class SightingForm extends React.Component {

    render() {
        return (
            <div>
                <form>
                    <label>Date: </label>
                    <input type="date" placeholder="Date"/><br/>
                    <label>Location: </label>
                    <input type="text" placeholder="Location" name="location"/><br/>
                    <label>Note: </label>
                    <textarea/>
                </form>
            </div>
        )
    }
}

export default connect()(SightingForm);