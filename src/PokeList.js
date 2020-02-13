import React, { Component } from 'react';
import PokeItem from './PokeItem.js';


export default class PokeList extends Component {
    render () {

     return (
        <section className="options">
            <section className="list-section">
                <ul className="pokemons">
                    {this.props.pokedex.map(passedPokemon => <PokeItem pokemon={passedPokemon} />)}
                </ul>
            </section>
        </section>
     );  
    }
}


{/* <PokeItem pokemon={passedPokemon} />
same as passing pokemon item into and creating an item named after that pokemon
function PokeItem(pokemon) {
    stuff
}
PokeItem(pokemon) */}