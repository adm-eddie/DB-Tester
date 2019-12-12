import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export class DeleteBox extends Component {
    state = {
        areaOne: ''
    }
    
    onChange = (e) => this.setState({areaOne: e.target.value})

    onSubmit = (e) => {
        e.preventDefault()
        console.log(this.state.areaOne)
        this.setState({areaOne: ''})
    }

    render() {
        return (
            <div style={formBoxStyle}>
                <Form style={formStyle} onSubmit={this.onSubmit}>
                    <Form.Group>
                       <Form.Label>Area 1</Form.Label> 
                       <Form.Control type='text' placeholder='Delete Object'
                       onChange={this.onChange} value={this.state.areaOne}/>
                    </Form.Group>
                    <br/>
                    <Button type='submit' style={formButtonStyle} variant='light'>Submit</Button>
                </Form>
            </div>
        )
    }
}

const formBoxStyle = {
    background: '#353942',
    color: 'white',
    margin: '0 auto',
    borderRadius: 10,
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.55)',
    transform: 'translateY(-180px)'
}

const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    padding: 30,
    width: 600
}

const formButtonStyle = {
    margin: '0 auto',
    fontWeight: 550,
    borderRadius: 10
}

export default DeleteBox
