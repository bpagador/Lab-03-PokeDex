import React, { Component } from 'react'
import PokeItem from './PokeItem'


export default class PokeList extends Component {
    render() {
        const pokemonItem = this.props.pokeData.map(pokeObject => {
            return <PokeItem pokeData={pokeObject} />
        })
        return (
            <ul className = 'pokeObject-container'>
                { pokemonItem }
            </ul>
        )
    }
}
