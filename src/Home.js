import React, { Component } from 'react';
import request from 'superagent';
import Header from './Header';
import './App.css'
import SearchBar from './SearchBar';

export default class Home extends Component {
    state = {
        searchQuery: null,
        pokemon: [],
    }

    handleChange = (event) => {
        const value = event.target.value;
        this.setState({ searchQuery: value });
    }

    handleClick = async() => {
        const fetchData = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.searchQuery}`);
        this.setState({ data: fetchData.body.results});
    }
    
    handleAttackClick = async() => {
        const fetchData = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex`);
        const attackData = fetchData.body.results.filter( (event) => {
            if (event.attack >= this.state.searchQuery) {
                return true;
            }
            return false;
        });
        this.setState({ data: attackData });
    }

    }

