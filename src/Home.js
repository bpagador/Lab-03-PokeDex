import React, { Component } from 'react';
import request from 'superagent';
import Header from './Header';
import './App.css'
import SearchBar from './SearchBar';
import PokeList from './PokeList';

export default class Home extends Component {
    state = {
        pokemon: [],
        searchQuery: '',
        searchType: '',
    }

    componentDidMount = async() => {
        const fetchedPokemon = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex`)
        this.setState({ pokemon: fetchedPokemon.body.results })
    }

    handleChange = (event) => {
        const value = event.target.value;
        this.setState({ searchQuery: value });
    }

    handleTypeChange = (event) => {
        const pokeType = event.target.value;
        this.setState({ searchType: pokeType })
    }

    handleClick = async() => {
        const clickedData = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.searchQuery}&type_1=${this.state.searchType}`);
        const clickResults = clickedData.body.results;
        this.setState({ pokemon: clickResults});
    }
    
    render(){
        return (
            <div>
                <Header />
                <SearchBar dropDown={this.handleTypeChange}/>
                <input onChange={this.handleChange}/>
                <button onClick={this.handleClick}>Search</button>
                <PokeList pokeArray={this.state.pokemon} />
            </div>


        )
    }
    }

