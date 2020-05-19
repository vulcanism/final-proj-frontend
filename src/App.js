import React, { Component } from 'react';
import {connect} from 'react-redux'
import Main from "./containers/Main";
import './skeleton.css';

class App extends Component {

  // componentDidMount() {
  //   fetch("http://localhost:3000/cryptids")
  //   .then(response => response.json())
  //   .then(data => console.log(data))
  // }

  render() {  
  return (
    <div className="App">
      <Main />
    </div>
  );
 }
}

export default App;
