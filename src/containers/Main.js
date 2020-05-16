import React, {Component} from "react";
import {Route} from "react-router-dom";
import Home from "../components/Home";

import CryptidForm from "../components/Cryptids/CryptidForm";
import CryptidsContainer from "./CryptidsContainer"
import SightingsContainer from "./SightingsContainer"


class Main extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" render={Home}/>
                <Route exact path="/cryptids/new" component={CryptidForm} />
                <Route exact path="/cryptids" component={CryptidsContainer} />
            </div>
        )
    }
}

export default Main;