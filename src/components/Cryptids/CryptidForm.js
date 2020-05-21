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
            <form onSubmit={this.handleSubmit}>
            <div class="container">
                        
                <div class="row">
                    <h3>Add Cryptid</h3>
                        <div class="one-third column">                
                        <label>Name: </label>
                        <input required type="text" placeholder="Name" value={this.state.name} name="name" onChange={this.handleChange}/><br/>
                        </div>

                        <div class="one-third column">
                        <label>Size: </label>
                        <input required type="text" placeholder="Size" value={this.state.size} name="size" onChange={this.handleChange}/><br/>
                        </div>
                        
                        <label>Classification: </label>
                        <input required type="text" placeholder="Classification" value={this.state.classification} name="classification" onChange={this.handleChange}/><br/>
                </div>                           

            </div>  {/*  container ends here */}

            <div class="center-button">
            <input type="submit"/>
            </div>            
                    
            </form>            
        )
    }
}

export default compose(
    withRouter,
    connect(null, {addCryptid})
)(CryptidForm);
// connect(null, {addCryptid})(CryptidForm)