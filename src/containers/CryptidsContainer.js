import React from "react";
import {connect} from "react-redux";
import {fetchCryptids} from "../actions/fetchCryptids";
import {Route} from "react-router-dom"

import Cryptids from "../components/Cryptids";
import CryptidForm from "../components/CryptidForm";
import Cryptid from "../components/Cryptid";

class CryptidsContainer extends React.Component {

    componentDidMount() {
        this.props.fetchCryptids()
    }
    
    render() {
        return (
            <div>
                <Route exact path="/cryptids/new" component={CryptidForm} />
                <Route exact path="/cryptids" render={() => <Cryptids cryptids={this.props.cryptids} />}/>                
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