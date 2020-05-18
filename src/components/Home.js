import React from "react";
import {Link} from "react-router-dom";

const Home = () => (
    <div className="homepage">
        <h3>Home Page</h3>
        <h4><Link to="/cryptids/new">Add New Cryptid</Link></h4>
    </div>

)

export default Home;