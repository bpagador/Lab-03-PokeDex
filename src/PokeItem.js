import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class PokeItem extends Component {
    render() {
        const pokemon = this.props.pokemon

        return (
            <li className = 'pokemon-container'>
                {/* pokemon image */}
                <img className='poke-image' src={this.props.pokemon.url_image} alt={this.props.pokemon.pokemon} />
                
                {/* pokemon name */}
                <Link to={`/pokemon/${pokemon._id}`}>
                    <h2 className='poke-name'>{pokemon.pokemon}</h2>
                </Link>

                <ul>
                
                    {/* pokemon type */}
                    <li>
                        <h3 className="poke-type">Type(s): {this.props.pokemon.type_1} | {this.props.pokemon.type_2}</h3>
                    </li>
                    
                    {/* pokemon attack and defense */}
                    <li>
                        <p className='attack-defense'>Attack: {this.props.pokemon.attack} | Defense: {this.props.pokemon.defense}</p>
                    </li>

                    <li>
                        <p className='shape'>Shape: {this.props.pokemon.shape}</p>
                    </li>

                    <li>
                        <p className='shape'>Ability: {this.props.pokemon.ability_1}</p>
                    </li>

                    <li>
                        <p className='shape'>Base Experience: {this.props.pokemon.base_experience}</p>
                    </li>
                </ul>
            </li>

        );
    }
}