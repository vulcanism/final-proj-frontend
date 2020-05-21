import React from "react";
import {connect} from "react-redux"
import { addSighting } from "../../actions/addSighting";

class SightingForm extends React.Component {

    state = {
        date: "",
        location: "",
        note: ""
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addSighting(this.state, this.props.cryptid.id)
        this.setState({
            date: "",
            location: "",
            note: ""
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <div class="row">
                <div class="six columns">                
                    <label>Date: </label>
                    <input required type="date" class="u-full-width" placeholder="Date" value={this.state.date} name="date" onChange={this.handleChange}/><br/>
                    </div>
                    <div class="six columns">
                    <label>Location: </label>
                    <input required type="text" class="u-full-width" placeholder="Location" value={this.state.location} name="location" onChange={this.handleChange}/><br/>
                    </div>
                    </div>
                    <label>Note: </label>
                    <textarea class="u-full-width" value={this.state.note} name="note" onChange={this.handleChange}/><br/>

                    <input type="submit"/>                
                
        </form>
        )
    }
}

export default connect(null, {addSighting})(SightingForm);