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
        page: 1, 
        info: {}
    }
// pagination stuff
    async componentDidMount() {
        const searchParams = new URLSearchParams(window.location.search);
        const query = searchParams.get('page') || searchParams.get('search') ; 

        this.setState({ searchQuery: query })

        let page = this.state.page;
        let search = this.state.searchQuery;

        if (query) {
        
            if (searchParams.get('page')){
                page = searchParams.get('page');
            }
            if (searchParams.get('search')){
                search = searchParams.get('search');
            }
            console.log(searchParams.get('search'));

        const URL = `https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${search}&page=${page}`

        console.log(URL);

        const response = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${search}&page=${page}`)
        const results = response.body.results;
        // const info = response.body.info;
        this.setState({ pokemon: results})
        } else {
            const fetchedPokemon = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex`)
            this.setState({ pokemon: fetchedPokemon.body.results })
        }
       console.log('hello!');
        
    }
// -------- 

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
        this.setState({ pokemon: clickResults, page: 1});
    }

    handlePageClick = async(currentPage) => {

        const clickedData = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.searchQuery}&type_1=${this.state.searchType}&page=${currentPage}`);
        const clickResults = clickedData.body.results;
        this.setState({ pokemon: clickResults});
    }

// pagination stuff
    routeToNextPage = () => {
        // const nextPageNumber = 1;
        console.log(this.state.page);

        this.setState(( prevState, nextPageNumber ) => ({

            page: prevState.page + 1
        }) )

        this.handlePageClick(this.state.page + 1)

        console.log(this.state.page + 1);
        // const response = await request.get (this.state.info.next);
        // console.log(response);
        // const results = response.body.results;
        // const info = response.body.info;
        // this.setState({ characters: results, info: info})
    }

    routeToPrevPage = () => {
        // const prevPageNumber = this.state.page -1;
        console.log(this.state.page);

        this.setState(( prevState, prevPageNumber ) => ({

            page: prevState.page - 1
        }))

        this.handlePageClick(this.state.page - 1)

        console.log(this.state.page - 1);

        // const response = await request.get (this.state.info.prev);
        // const results = response.body.results;
        // const info = response.body.info;
        // this.setState({ pokemon: results, info: info })
    }
// ----------------------------------
    render(){
        return (
            <div>
                <Header />
                <SearchBar dropDown={this.handleTypeChange}/>
                <section className='find-poke-bar'> 
                    <p>Step 2: find pokemon by name</p>
                    <input onChange={this.handleChange}/>
                    <button onClick={this.handleClick}>Search</button>
                </section>
{/* pagination stuff ------------*/}

                {/* {this.state.info.prev &&  */}
                <button onClick={this.routeToPrevPage}>Previous</button>
                {/* {this.state.info.next &&  */}
                <button onClick={this.routeToNextPage}>Next</button>
{/* ---------------------------- */}
                
                <PokeList pokeArray={this.state.pokemon} />

            </div>


        )
    }
    }

