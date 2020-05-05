import React, { Component } from 'react'

export default class SortSelector extends Component {
    render() {
        return (
            <div>
                <ul>
                <li>
                    <input 
                    type = 'radio'
                    name = 'sortThis'
                    value= 'attack'
                    checked = {this.props.sortThis === 'attack'}
                    onChange = {() => this.props.handleSortChange('attack')}
                    />
                    Attack
                </li>

                <li>
                    <input 
                    type = 'radio'
                    name = 'sortThis'
                    value= 'defense'
                    checked = {this.props.sortThis === 'defense'}
                    onChange = {() => this.props.handleSortChange('defense')}
                    />
                    Defense
                </li>

                <li>
                    <input 
                    type = 'radio'
                    name = 'sortThis'
                    value= 'shape'
                    checked = {this.props.sortThis === 'shape'}
                    onChange = {() => this.props.handleSortChange('shape')}
                    />
                    Shape
                </li>

                <li>
                    <input 
                    type = 'radio'
                    name = 'sortThis'
                    value= 'ability_1'
                    checked = {this.props.sortThis === 'ability_1'}
                    onChange = {() => this.props.handleSortChange('ability_1')}
                    />
                    Ability
                </li>

                <li>
                    <input 
                    type = 'radio'
                    name = 'sortThis'
                    value= 'base_experience'
                    checked = {this.props.sortThis === 'base_experience'}
                    onChange = {() => this.props.handleSortChange('base_experience')}
                    />
                    Base Experience
                </li>

                </ul>            
            </div>
        )
    }
}
