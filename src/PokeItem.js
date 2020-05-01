import React, { Component } from 'react'

export default class PokeItem extends Component {
    render() {
        return (
            <li className = 'pokemon-container'>
                {/* pokemon name */}
                <h2 className='poke-name'>{this.props.pokemon.pokemon}</h2>

                {/* pokemon image */}
                <img className='poke-image' src={this.props.pokemon.url_image} alt={this.props.pokemon.pokemon} />
                
                {/* pokemon type */}
                <h3 className="poke-type">Type(s): {this.props.pokemon.type_1} | {this.props.pokemon.type_2}</h3>
                
                {/* pokemon attack and defense */}
                <p className='attack-defense'>Attack: {this.props.pokemon.attack} | Defense: {this.props.pokemon.defense}</p>
            </li>

        );
    }
}