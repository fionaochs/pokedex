import React, { Component } from 'react';
import PokeItem from './PokeItem.js';


export default class PokeList extends Component {
    render () {

        // pokedex.filter(Pokemon => {
        //     if (!this.state.keyword) return true;
        //     return Pokemon.keyword.includes(this.state.keyword);
        //   })
        //   .map(passedPokemon => 
        //     <PokeItem
        //     pokemon={passedPokemon} 
        //     />)

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