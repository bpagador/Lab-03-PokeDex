import React, { Component } from 'react'

export default class SearchBar extends Component {
    render() {
        return (
            <div className='search-bar-div'>
                <section className='pokemon-search'>
                    Pokemon by name of type:
                    <input onChange={this.props.CALLBACKhandleChange} />
                    <button className='find-button' onClick={this.props.CALLBACKhandleClick}>Find!</button>
                </section>
                
            </div>
        )
    }
}
