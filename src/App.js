import React, { Component } from 'react';
import './App.css';
import {CardList} from './Components/card-list/card-list.component';
import {SearchBox} from './Components/search-Box/search-box.component';
class App extends Component{
  
  constructor(){
    
    super();
    
    this.state = {
      monsters :[],
      searchFeild:""
    };
    
    // this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => {

        this.setState({monsters: users})

      })
  }

  handleChange = (e) =>{
    this.setState({ searchFeild: e.target.value })
  }
  
  render(){
    const { monsters, searchFeild } = this.state;
    // === const monsters = this.state.monsters
    const filteredMonsters = monsters.filter(monster=>{
      return monster.name.toLowerCase().includes(searchFeild.toLowerCase())
    })
    return (

    <div className="App">

      <SearchBox
        placeholder="Search Monstrers.." 
        handleChange={this.handleChange}
      />

      <CardList monsters={filteredMonsters}/>

    </div>
    
  )}



}

export default App;
