import React, { Component } from 'react'

export default class PokeProfile extends Component {
    render() {
        return (
            <div>
                <h1 className='poke-name'>{this.props.name.pokemon}</h1>
                    <section className='poke-container'>
                        
                        <img className='poke-image' src={this.props.name.url_image} alt={this.props.name.url_image} />

                        <section className='poke-info'>
                            <ul className='pokemon-details'> 

                                <li><h2>Basic Information</h2></li>
                                <li>Generation: {this.props.name.generation_id}</li>
                                <li>Ability: {this.props.name.ability_1}</li>
                                <li>Height: {this.props.name.height} meters</li>
                                <li>Weight: {this.props.name.weight} kg</li>
                                
                            </ul>
                    </section>
                </section>
            </div>
        )
    }
}