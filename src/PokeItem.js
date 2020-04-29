import React, { Component } from 'react';

export default class PokeItem extends Component {
    render() {
        return (
            <li className = 'item-container'>
                <img src={this.props.pokeData.url_image} alt={this.props.pokeData.pokemon} />
                <p>Attack: {this.props.pokeData.attack}; Defense: {this.props.pokeData.defense}</p>
                <h2>{this.props.pokeData.pokemon}</h2>
            </li>
        );
    }
}