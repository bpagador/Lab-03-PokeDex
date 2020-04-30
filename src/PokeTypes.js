import React, { Component } from 'react'
import pokeData from './data'
import PokeList from './PokeList'

export default class PokeTypes extends Component {
    state = {
        pokeType: ''
    }

    handleTypeChange = (event) => {
        this.setState({
            pokeType: event.target.value
        })
        
    }

    render() {
        const filteredPokemon = pokeData
        .filter(pokemon => pokemon.type_1 === this.state.pokeType) /* find a way to include type 2 */

console.log(filteredPokemon)
        return (
            <div className = 'pokemon-types'>
                <label>Filter by type: </label>
                <div className = 'user-selection'>

                    <select name='type' input='input-types' onChange={this.handleTypeChange}>
                        <option value="all">All Types</option>
                        <option value="bug">Bug</option>
                        <option value="dark">Dark</option>
                        <option value="dragon">Dragon</option>
                        <option value="electric">Electric</option>
                        <option value="fairy">Fairy</option>
                        <option value="fighting">Fighting</option>
                        <option value="fire">Fire</option>
                        <option value="flying">Flying</option>
                        <option value="ghost">Ghost</option>
                        <option value="grass">Grass</option>
                        <option value="ice">Ice</option>
                        <option value="normal">Normal</option>
                        <option value="poison">Poison</option>
                        <option value="psychic">Psychic</option>
                        <option value="rock">Rock</option>
                        <option value="steel">Steel</option>
                        <option value="water">Water</option>
                    </select>
                    {/* { console.log(this.state.pokeType) } */}
                    <PokeList pokeData={filteredPokemon}/>
                </div> 
            </div>
        )
        
    }
}
