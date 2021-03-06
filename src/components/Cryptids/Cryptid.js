import React from "react";
import SightingsContainer from "../../containers/SightingsContainer";
import {Link} from "react-router-dom"
import {connect} from "react-redux";
import {compose} from "redux";
import {withRouter} from "react-router-dom";

import {deleteCryptid} from "../../actions/deleteCryptid";

const Cryptid = ({ cryptid, deleteCryptid, history }) => {       

    // let cryptid = props.cryptids.filter(cryptid => cryptid.id == props.match.params.id)[0]

    //window.history.push("/link") is not a function
    const handleDelete = (cryptid) => {
       deleteCryptid(cryptid.id)
       history.push("/cryptids")                         
    }    
    
    return (        
        <div class="container">
            <div class="row">            
            <h2>{cryptid ? cryptid.name : null}</h2>
            <h3>{cryptid ? cryptid.size : null} - {cryptid ? cryptid.classification : null}</h3>
            <br />
            <br />
            <h5>Add new sighting</h5>
            <SightingsContainer cryptid={cryptid} /><br/>
            <div column class="six columns">            
            <button className="button-primary" onClick={() => handleDelete(cryptid)}>Delete Cryptid</button>
            </div>
            {/* <Link className="btn" to={`/cryptids/${props.match.params.id}/edit`}>Edit</Link>             */}
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({    
    deleteCryptid: (id) => dispatch(deleteCryptid(id))
})

export default compose(
    withRouter,
    connect(null, mapDispatchToProps)
)(Cryptid);
// connect(null, mapDispatchToProps)(Cryptid);