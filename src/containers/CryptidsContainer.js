import React from "react";
import {connect} from "react-redux";
import {fetchCryptids} from "../actions/fetchCryptids";
import {Route} from "react-router-dom"

import Cryptids from "../components/Cryptids/Cryptids";
import CryptidForm from "../components/Cryptids/CryptidForm";
import Cryptid from "../components/Cryptids/Cryptid";
import CryptidEdit from "../components/Cryptids/CryptidEdit";

class CryptidsContainer extends React.Component {

    componentDidMount() {
        this.props.fetchCryptids()        
    }
    
    render() {
        return (
            <div>
                {/* <Route exact path="/cryptids/new" component={CryptidForm} />                 */}
                {/* <Route exact path="/cryptids/:id/edit" render={(routerProps) => <CryptidEdit {...routerProps} cryptids={this.props.cryptids} />}/> */}
                <Route exact path="/cryptids" render={(routerProps) => <Cryptids {...routerProps} cryptids={this.props.cryptids} />}/>
                <Route exact path="/cryptids/:id" render={(routerProps) => <Cryptid {...routerProps} cryptids={this.props.cryptids} />}/>             
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