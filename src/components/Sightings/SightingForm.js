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
        // addSighting(this.state, this.props.id)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Date: </label>
                    <input type="date" placeholder="Date" value={this.state.date} name="date" onChange={this.handleChange}/><br/>
                    <label>Location: </label>
                    <input type="text" placeholder="Location" value={this.state.location} name="location" onChange={this.handleChange}/><br/>
                    <label>Note: </label>
                    <textarea value={this.state.note} name="note" onChange={this.handleChange}/><br/>

                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default connect()(SightingForm);