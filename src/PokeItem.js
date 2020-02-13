import React, { Component } from 'react';


export default class Pokemon extends Component {
    render () {
        return <li>
            <div id="info-container">
                <h3>{this.props.pokemon.pokemon}</h3>
            </div>
            <div id="image-container">
                <img alt={this.props.pokemon.url_image}
                    src={this.props.pokemon.url_image}/>
            </div>
            <div id="abilities">
                <p>Type: {this.props.pokemon.type_1}</p>
                <p>Defense Score: {this.props.pokemon.defense}</p>
                <p>Defense: {this.props.pokemon.type_2}</p>
            </div>
        </li>
    }
}