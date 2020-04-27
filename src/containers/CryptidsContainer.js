import React from "react";
import {connect} from "react-redux";
import CryptidComponent from "./components/CryptidComponent";
import CryptidForm from "./components/CryptidForm";
import {fetchCryptids} from "./actions/fetchCryptids";

class CryptidsContainer extends React.Component {

    componentDidMount() {
        this.props.fetchCryptids()
    }
    
    render() {
        return (
            <div>
                <CryptidComponent cryptids={this.props.cryptids} />
                <CryptidForm />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cryptids: state.cryptids
    }
}

export default connect(mapStateToProps, {fetchCryptids})(CryptidsContainer)