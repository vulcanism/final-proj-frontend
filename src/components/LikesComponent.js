import React from "react";

class LikesComponent extends React.Component {

    state = {
        count: 0
    }

    handleClick = (event) => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {    
        return (
            <div>
                <button onClick={this.handleClick}>
                    Like {this.state.count}
                </button>
            </div>
        )
    }
}

export default LikesComponent;