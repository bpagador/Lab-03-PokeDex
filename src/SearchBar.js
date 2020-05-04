import React, { Component } from 'react'


export default class SearchBar extends Component {
    render() {
        return (
            <div className='search-bar-div' onChange={this.props.dropDown}>
                <p >Step 1: select type</p>
                <select>
                <option value='' defaultValue>All</option>
                        <option value='water'>Water</option>
                        <option value='fire'>Fire</option>
                        <option value='grass'>Grass</option>
                </select>

                
            </div>
        )
    }
}
