import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import request from 'superagent';
import PokeList from './PokeList.js';

class App extends Component {
  state = {
    selected: null,
    pokedex: []
  }
  //initialize state with empty array for API

  handleChange = e => {
    this.setState({selected: e.target.value});
  }
  async componentDidMount() {
    const data = await request.get('https://alchemy-pokedex.herokuapp.com/api/pokedex');
  
    this.setState({pokedex: data.body.results});
    //set data to API call
}
  render() {

      return (
        <div className="App">
          <Header></Header>
          <PokeList pokedex={this.state.pokedex} />
        </div>
      );
  }
}
export default App;