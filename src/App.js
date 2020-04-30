import React, { Component } from 'react';
import {connect} from 'react-redux'
import CryptidsContainer from "./containers/CryptidsContainer";
import './App.css';

class App extends Component {

  // componentDidMount() {
  //   fetch("http://localhost:3000/cryptids")
  //   .then(response => response.json())
  //   .then(data => console.log(data))
  // }

  render() {  
  return (
    <div className="App">
      <CryptidsContainer />
    </div>
  );
 }
}

export default App;
