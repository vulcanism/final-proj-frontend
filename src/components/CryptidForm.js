import React from "react";

class CryptidForm extends React.Component {
    render() {

    return (
        <div className="cryptid-form">
            <form>
                <label>Name:</label>
                <input type="text" placeholder="Name"/><br/>

                <label>Size:</label>
                <input type="text" placeholder="Size"/><br/>

                <label>Classification:</label>
                <input type="text" placeholder="Classification"/><br/>
            </form>
            
        </div>
    )
    }
}

export default CryptidForm