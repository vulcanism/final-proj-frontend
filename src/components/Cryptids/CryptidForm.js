import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {addCryptid} from "../../actions/addCryptid";

class CryptidForm extends React.Component {

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
        this.props.addCryptid(this.state)
        this.setState({
            name: "",
            size: "",
            classification: ""
        })
        this.props.history.push("/cryptids")        
    }

    render() {
        return (            
            <div className="cryptid-form">
                <h3>Add Cryptid</h3>
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

export default compose(
    withRouter,
    connect(null, {addCryptid})
)(CryptidForm);
// connect(null, {addCryptid})(CryptidForm)