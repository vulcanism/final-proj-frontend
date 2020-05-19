import React from "react";
import {Link} from "react-router-dom";

const Home = () => (
    <div className="homepage">        
        <h3>Cryptid Tracker</h3>
        <h5><Link to="/cryptids/new">Add New Cryptid</Link></h5>        
    </div>

)

export default Home;