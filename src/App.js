import React, { Component } from 'react'
import Header from './Header'
import PokeTypes from './PokeTypes'

export default class App extends Component {
  render() {
    return (
      <div className='body'>
        <Header />
        <PokeTypes />
        
      </div>
    )
  }
}
