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
                {/* <p>Defense Score: {this.props.pokemon.defense}</p> */}
                <p>Defense: {this.props.pokemon.type_2}</p>
            </div>
            <table>
            <thead>
                <tr>
                    <th>Def</th>
                    <th>Hp</th>
                    <th>Sp atk</th>
                    <th>Sp def</th>
                    <th>Speed</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{this.props.pokemon.defense}</td>
                    <td>{this.props.pokemon.hp}</td>
                    <td>{this.props.pokemon.special_attack}</td>
                    <td>{this.props.pokemon.special_defense}</td>
                    <td>{this.props.pokemon.speed}</td>
                </tr>
            </tbody>
            </table>
        </li>
    }
}