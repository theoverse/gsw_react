import React, { Component } from 'react';
import './App.css';

// calss component
export class Person extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='App'>
                <h1>Class Based Test Component</h1>
                {/* <h3> Name: {this.props.name} <br /> Age: {this.props.age}</h3> */}
            </div>
        )
    }
}

export default Person;
