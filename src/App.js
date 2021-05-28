import React, { Component } from 'react';

import { CardList } from '../src/components/card-list/card-list.component';
import { SearchBox } from '../src/components/search-box/search-box.component';


// import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
      // .then(response => response.json())
      // .then(users => console.log(users));
  }

  render() {
    const { monsters, searchField} = this.state;
    const filtedMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
        {/* <input type='search' placeholder='seacrh monsters' onChange={e => this.setState({ searchField: e.target.value })}/> */}
        <SearchBox placeholder='seacrh monsters' handleChange={e => this.setState({ searchField: e.target.value })}/>

        <CardList monsters={filtedMonsters}/>
      </div>
    );
  };
}

export default App;
