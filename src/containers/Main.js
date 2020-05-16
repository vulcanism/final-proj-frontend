import React, {Component} from "react";
import {Route} from "react-router-dom";
import Home from "../components/Home";
import NavBar from "../components/NavBar";
import {connect} from "react-redux";

import CryptidForm from "../components/Cryptids/CryptidForm";
import Cryptid from "../components/Cryptids/Cryptid";
import Cryptids from "../components/Cryptids/Cryptids";
import CryptidsContainer from "./CryptidsContainer"
import SightingsContainer from "./SightingsContainer"


class Main extends Component {
    render() {
        // const cryptids = this.props;
        return (
            <div>
                <NavBar />
                <Route exact path="/" render={Home}/>
                <Route exact path="/cryptids/new" component={CryptidForm} />
                <Route exact path="/cryptids" component={CryptidsContainer} />
                {/* <Route exact path="/cryptids/:id" render={props => {
                    const matchId = props.match.params.id
                    const cryptid = cryptids.find(cryptid => (cryptid.id == matchId))
                    return <Cryptid cryptid={cryptid} {...props} />
                }} /> */}
                {/* <Route exact path="/cryptids/:id" render={() => <Cryptid cryptids={this.props.cryptids} />} /> */}
                {/* <Route exact path="/cryptids/:id" render={(routerProps) => <Cryptid {...routerProps} cryptids={this.props.cryptids} />}/> */}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return ({
        cryptids: state.cryptids
    })
}

export default connect(mapStateToProps)(Main);