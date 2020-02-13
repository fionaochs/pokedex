import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import request from 'superagent';
import PokeList from './PokeList.js';

class App extends Component {
  state = {
    selected: null,
    pokedex: [],
    pokemon: null
  }
  //initialize state with empty array for API

  handleChange = e => {
    this.setState({selected: e.target.value});
  }
  // handlepokemon = e => {
  //   this.setState({pokemon: e.target.value});
  // }
  async componentDidMount() {
    const data = await request.get('https://alchemy-pokedex.herokuapp.com/api/pokedex');
    this.setState({pokedex: data.body.results});
    //set data to API call
}
  render() {
    const pokemon = this.state.pokedex.filter(species => {
      if (!this.state.selected) return true;
      return species.type_1.includes(this.state.selected) || species.type_2.includes(this.state.selected) || species.pokemon.includes(this.state.selected);
    })

      return (
        <div className="App">
          <Header></Header>
          <div id="input"><input type="text" className="form" onChange={this.handleChange}></input></div>
          <PokeList pokedex={pokemon} />
        </div>
      );
  }
}
export default App;