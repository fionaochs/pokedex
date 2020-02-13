import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import request from 'superagent';
import PokeList from './PokeList.js';

class App extends Component {
  state = {
    pokedex: [],
    pokemon: null,
    searchInput: null
  }
  //initialize state with empty array for API

  
  handleChange = e => {
    this.setState({searchInput: e.target.value});
  }
  async componentDidMount() {
    const data = await request.get('https://alchemy-pokedex.herokuapp.com/api/pokedex');
    this.setState({pokedex: data.body.results});
    //set data to API call
}
// handleSearchInput = async() => {
//   let query = 'https://alchemy-pokedex.herokuapp.com/api/pokedex';
//   query = this.state.searchInput ? query + '?pokemon=' + this.state.searchInput : query;
//   const data = await request.get(query);
//   this.setState({pokedex: data.body.results});
// }
handleSearchInput = async() => {
  let query = 'https://alchemy-pokedex.herokuapp.com/api/pokedex';
  query = this.state.searchInput ? query + '?pokemon=' + this.state.searchInput : query;
  const data = await request.get(query);
  this.setState({pokedex: data.body.results});
}
  render() {
    // const pokemon = this.state.pokedex.filter(species => {
    //   if (!this.state.searchInput) return true;
    //   return species.type_1.includes(this.state.searchInput) || species.type_2.includes(this.state.searchInput) || species.pokemon.includes(this.state.searchInput);
    // })

      return (
        <div className="App">
          <Header></Header>
          <div id="input"><input type="text" className="form" onChange={this.handleChange}></input><button onClick={this.handleSearchInput}>Submit</button></div>
          <PokeList pokedex={this.state.pokedex} />
        </div>
      );
  }
}
export default App;