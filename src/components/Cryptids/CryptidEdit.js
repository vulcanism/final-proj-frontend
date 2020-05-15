import React from "react";
import {connect} from "react-redux";
import {editCryptid} from "../../actions/editCryptid";

class CryptidEdit extends React.Component {

    state = {
        name: "",
        size: "",
        classification: ""
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.editCryptid(this.state)
        this.setState({
            name: "",
            size: "",
            classification: ""
        })
    }

    render() {
        return (
            <div className="cryptid-form">
                <form onSubmit={this.handleSubmit}>
                    <label>Name: </label>
                    <input type="text" placeholder="Name" value={this.state.name} name="name" onChange={this.handleChange}/><br/>

                    <label>Size: </label>
                    <input type="text" placeholder="Size" value={this.state.size} name="size" onChange={this.handleChange}/><br/>

                    <label>Classification: </label>
                    <input type="text" placeholder="Classification" value={this.state.classification} name="classification" onChange={this.handleChange}/><br/>

                    <input type="submit"/>
                </form>
                
            </div>
        )
    }
}

export default connect(null, {editCryptid})(CryptidEdit);