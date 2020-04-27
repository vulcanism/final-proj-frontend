import React, { Component } from 'react';
import {connect} from 'react-redux'
import CryptidsContainer from "./containers/CryptidsContainer";
import './App.css';

class App extends Component {
  render() {  
  return (
    <div className="App">
      <CryptidsContainer />
    </div>
  );
 }
}

export default App;
