import React from "react";
import {connect} from "react-redux";
import {fetchCryptids} from "../actions/fetchCryptids";

import Cryptids from "../components/Cryptids";
import CryptidForm from "../components/CryptidForm";
import CryptidShow from "../components/CryptidShow";

class CryptidsContainer extends React.Component {

    componentDidMount() {
        this.props.fetchCryptids()
    }
    
    render() {
        return (
            <div>
                <Cryptids cryptids={this.props.cryptids} />
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

const mapDispatchToProps = (dispatch) => ({
    fetchCryptids: () => dispatch(fetchCryptids())
})

export default connect(mapStateToProps, mapDispatchToProps)(CryptidsContainer)