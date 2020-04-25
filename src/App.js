import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
let p = "Abdelrhman gad";
class App extends Component{
  
  constructor(){
    
    super();
    
    this.state = {
      monsters :[
        {
          name:"franksetien ",
          id: 1
        },
        {
          name:"Drukla ",
          id: 2
        },
        {
          name:"zombie ",
          id: 3
        },
      ]
    }
    
  }
  
  render(){
    return(
        <div className="App">
          {
            this.state.monsters.map(monster => {
              return <h1 key={monster.id}>{monster.name  +  monster.id}</h1>
            })
          }
        </div>
    )
  }
}

export default App;
