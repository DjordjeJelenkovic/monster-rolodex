import React, { Component } from 'react';

import { CardList } from '../src/components/card-list/card-list.component';

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
    return (
      <div className="App">
        <input type='search' placeholder='seacrh monsters' onChange={e => this.setState({ searchField: e.target.value })}/>
        <CardList monsters={this.state.monsters}/>
      </div>
    );
  };
}

export default App;
