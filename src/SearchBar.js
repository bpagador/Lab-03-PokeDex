import React, { Component } from 'react'
import SortSelector from './SortSelector.js'


export default class SearchBar extends Component {
    render() {
        return (
            <div className='search-bar-div' >
                <p> step 1: filter by pokemon type or a specific quality</p>
                <select onChange={this.props.dropDown}>
                <option value='' defaultValue>All</option>
                        <option value='water'>Water</option>
                        <option value='fire'>Fire</option>
                        <option value='grass'>Grass</option>
                </select>
                <section className="sort-by-box">
                    < SortSelector 
                    handleSortChange={this.props.handleSortChange}
                    sortThis={this.props.sortThis}  />
                </section>
                
            </div>
        )
    }
}
