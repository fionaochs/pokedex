import React, { Component } from 'react';
// import pokemon from './Data.js';
import PokeItem from './PokeItem.js';


export default class PokemonList extends Component {
    render () {
        // const elements = this.props.pokedex.map(pokemon => <PokeItem pokemon={pokemon} />)

     return (
        <section className="options">
            <section className="list-section">
                <ul className="pokemons">
                    {this.props.pokedex.map(pokemon => <PokeItem pokemon={pokemon} />)}
                </ul>
            </section>
        </section>
     );  
    }
}

