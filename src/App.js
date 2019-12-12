import React, { Component } from 'react'
import './App.css'
import logo from './400x400.png'
import FilterButton from './components/FilterButton'
import Button from 'react-bootstrap/Button'
import FormBox from './components/FormBox'
import DeleteBox from './components/DeleteBox'

import 'bootstrap/dist/css/bootstrap.min.css';

export class App extends Component {
  state = {
    show: ''
  }

  home = () => this.setState({show: ''})
  insert = () => this.setState({show: 'form'})
  delete = () => this.setState({show: 'delete'})

  showForm = () => {
    if (this.state.show === 'form') {
      return (
        <FormBox />
      )
    }
  }

  showDelete = () => {
    if (this.state.show ==='delete') {
      return (
        <DeleteBox />
      )
    }
  }

  render() {
    return (
      <div className='app'>
        <div className='header'>
          <button className='homeButton' onClick={this.home}>
            <img src={logo} alt='ADM' height='200' style={{margin: '0 auto'}}/>
          </button>
          <div className='taskbar'>
            <FilterButton />
            <Button onClick={this.insert} variant='dark' style={filterStyle}>Insert</Button>
            <Button onClick={this.delete} variant='dark' style={filterStyle}>Delete</Button>
          </div>
        </div>
        {this.showForm()}
        {this.showDelete()}
      </div>
    )
  }
}

const filterStyle = {
  height: 50,
  width: 120,
  borderRadius: 15,
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.55)',
  fontWeight: 550
}

export default App
