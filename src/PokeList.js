import React, { Component } from 'react'
import PokeItem from './PokeItem'


export default class PokeList extends Component {
    render() {
        const pokemonItem = this.props.pokemon.map(pokeObject => {
            return <PokeItem pokemon={pokeObject} />
        })
        return (
            <ul className = 'pokeObject-container'>
                { pokemonItem }
            </ul>
        )
    }
}
