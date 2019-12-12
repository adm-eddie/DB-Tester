import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export class FormBox extends Component {
    state = {
        areaOne: '',
        areaTwo: '',
        areaThree: '',
        areaFour: ''
    }

    onChangeA1 = (e) => this.setState({areaOne: e.target.value})
    onChangeA2 = (e) => this.setState({areaTwo: e.target.value})
    onChangeA3 = (e) => this.setState({areaThree: e.target.value})
    onChangeA4 = (e) => this.setState({areaFour: e.target.value})

    onSubmit = (e) => {
        e.preventDefault()
        console.log([this.state.areaOne, this.state.areaTwo, this.state.areaThree, this.state.areaFour])
        this.setState({
            areaOne: '',
            areaTwo: '',
            areaThree: '',
            areaFour: ''
        })
    }

    render() {
        return (
            <div style={formBoxStyle}>
                <Form style={formStyle} onSubmit={this.onSubmit}>
                    <Form.Group>
                        <Form.Label>Area 1</Form.Label>
                        <Form.Control type='text' placeholder='Enter Object' 
                        onChange={this.onChangeA1} value={this.state.areaOne}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Area 2</Form.Label>
                        <Form.Control type='text' placeholder='Enter Object'
                        onChange={this.onChangeA2} value={this.state.areaTwo}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Area 3</Form.Label>
                        <Form.Control type='text' placeholder='Enter Object'
                        onChange={this.onChangeA3} value={this.state.areaThree}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Area 4</Form.Label>
                        <Form.Control type='text' placeholder='Enter Object'
                        onChange={this.onChangeA4} value={this.state.areaFour}/>
                    </Form.Group>
                    <br/>
                    <Button type='submit' variant='light' style={formButtonStyle}>Submit</Button>
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
    transform: 'translateY(-50px)',
    position: 'relative'
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

export default FormBox
