import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import PokeList from './PokeList.js';
import Search from './Search.js';
import Paging from './Paging.js';
import { getPokemon } from './services/pokedex-api.js';

class App extends Component {
  state = {
    pokedex: [],
    count: 0
  }

  async loadPokemon() {
    const data = await getPokemon();
    this.setState({pokedex: data.results});
    const pokemon = data.Search;
    const count = data.count;
    this.setState({ pokemon, count });
  }
  
  async componentDidMount() {
    window.location.hash = 'sort=id'
    //#sort=id&pokemon=onix&page=1

    await this.loadPokemon();

    window.addEventListener("hashchange", async () => {
      console.log("change");
      await this.loadPokemon();
    });
  }

  render() {
    const { pokedex, count } = this.state;

      return (
        <div className="App">
          <Header />
          <Search />
          <PokeList pokedex={pokedex} />
          <Paging count={count} />
        </div>
      );
  }
}
export default App;