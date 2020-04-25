import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
let p = "Abdelrhman gad";
class App extends Component{
  
  constructor(){
    
    super();
    
    this.state = {
      string :"GAD"
    }
    
  }
  
  render(){
    return(
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>Hello {this.state.string}</p>
            <button onClick={ ()=> this.setState({string: "Abdelrhman"} )}> Change Text</button>
          </header>
        </div>
    )
  }
}

export default App;
