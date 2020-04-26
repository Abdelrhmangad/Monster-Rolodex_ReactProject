import React, { Component } from 'react';
import './App.css';
<<<<<<< Updated upstream
=======
import {CardList} from './Components/card-list/card-list.component';
>>>>>>> Stashed changes
class App extends Component{
  
  constructor(){
    
    super();
    
    this.state = {
      monsters :[]
    }
    
  }


  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => {

        this.setState({monsters: users})

      })
  }

  
  render(){
    return(
        <div className="App">
<<<<<<< Updated upstream
          {
            this.state.monsters.map(monster => {
              return <h1 key={monster.id}>{monster.name  +  monster.id}</h1>
            })
          }
=======
          <CardList name="Gad"/>
          <h1>{this.state.string}</h1>
>>>>>>> Stashed changes
        </div>
    )
  }
}

export default App;
