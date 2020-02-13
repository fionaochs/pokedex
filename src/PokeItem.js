import React, { Component } from 'react';


export default class Pokemon extends Component {
    render () {
        return <li>
            <div id="info-container">
                <h3>{this.props.pokemon.pokemon}</h3>
                {/* <p>{this.props.pokemon.pokebase}</p> */}
            </div>
            <div id="image-container">
                <img alt={this.props.pokemon.url_image}
                    src={this.props.pokemon.url_image}/>
            </div>
        </li>
    }
}