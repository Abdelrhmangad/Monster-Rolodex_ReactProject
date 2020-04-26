import React, { Component } from 'react';
import './App.css';
import {CardList} from './Components/card-list/card-list.component';
class App extends Component{
  
  constructor(){
    
    super();
    
    this.state = {
      monsters :[],
      searchFeild:""
    };
    
  }


  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => {

        this.setState({monsters: users})

      })
  }
  
  render(){
    const { monsters, searchFeild } = this.state;
    // === const monsters = this.state.monsters
    const filteredMonsters = monsters.filter(monster=>{

      return monster.name.toLowerCase().includes(searchFeild.toLowerCase())
    
    })
    console.log(filteredMonsters)
    return (
    <div className="App">

      <input 
        type="search" autoFocus 
        placeholder="Search monsters.."
        // this,setState has a callBack Function
        onChange={e => this.setState({searchFeild: e.target.value})}
      />

      <CardList monsters={filteredMonsters} />

    </div>
  )}



}

export default App;
