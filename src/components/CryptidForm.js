import React from "react";

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
    }

    render() {
        return (
            <div className="cryptid-form">
                <form onSubmit={this.handleSubmit}>
                    <label>Name:</label>
                    <input type="text" placeholder="Name" value={this.state.name} name="name" onChange={this.handleChange}/><br/>

                    <label>Size:</label>
                    <input type="text" placeholder="Size" value={this.state.size} name="size" onChange={this.handleChange}/><br/>

                    <label>Classification:</label>
                    <input type="text" placeholder="Classification" value={this.state.classification} name="classification" onChange={this.handleChange}/><br/>

                    <input type="submit"/>
                </form>
                
            </div>
        )
    }
}

export default CryptidForm