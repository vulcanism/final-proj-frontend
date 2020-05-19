import React from "react";
import {connect} from "react-redux";
import {Route} from "react-router-dom"
import {fetchCryptids} from "../actions/fetchCryptids";
import {deleteCryptid} from "../actions/deleteCryptid";
import {fetchCryptid} from "../actions/fetchCryptid";

import Cryptids from "../components/Cryptids/Cryptids";
import CryptidForm from "../components/Cryptids/CryptidForm";
import Cryptid from "../components/Cryptids/Cryptid";
// import CryptidEdit from "../components/Cryptids/CryptidEdit";

class CryptidsContainer extends React.Component {

    componentDidMount() {
        this.props.fetchCryptids()           
    }
    
    render() {
        return (
            <div class="container">                
                {/* <Route exact path="/cryptids/:id/edit" render={(routerProps) => <CryptidEdit {...routerProps} cryptids={this.props.cryptids} />}/> */}
                {/* <Route exact path="/cryptids" render={(routerProps) => <Cryptids {...routerProps} cryptids={this.props.cryptids} />}/> */}
                <Cryptids cryptids={this.props.cryptids} deleteCryptid={this.props.deleteCryptid}/>
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
    fetchCryptids: () => dispatch(fetchCryptids()),
    fetchCryptid: (id) => dispatch(fetchCryptid(id)),
    deleteCryptid: (id) => dispatch(deleteCryptid(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(CryptidsContainer)