import React, { Component } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'

export class FilterButton extends Component {
    render() {
        return (
            <div>
                <Dropdown>
                    <Dropdown.Toggle style={filterStyle} variant="dark" id="dropdown-basic">
                        Filter
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
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

export default FilterButton
