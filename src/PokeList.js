import React, { Component } from 'react'
import PokeItem from './PokeItem'


export default class PokeList extends Component {
    render() {
        return (
            <ul className="pokemon-list">
                {
                    this.props.pokeArray.map(pokemon => {
                        return <PokeItem pokemon={pokemon} />
                    })
                }
            </ul>
        )
        
    }
}
