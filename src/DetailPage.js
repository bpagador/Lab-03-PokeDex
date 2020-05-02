import React, { Component } from 'react'
import request from 'superagent'
import PokeProfile from './PokeProfile'
import Header from './Header'

export default class DetailPage extends Component {
    state = {
        pokeInfo: []
    }

    async componentDidMount() {
        const pokeId = this.props.match.params.id
        const fetchedPokeId = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex/${pokeId}`)

        this.setState({ pokeInfo: fetchedPokeId.body })
        console.log(this.state.pokeInfo)
    }
    render() {
        return (
            <div>
                <Header />
                {
                    this.state.pokeInfo 
                    ? <PokeProfile name={this.state.pokeInfo} />
                    : <h1>Loading...</h1>
                }
                
            </div>
        )
    }
}
