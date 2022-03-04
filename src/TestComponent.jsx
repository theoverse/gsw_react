import React from 'react';
import './App.css';

function TestComponent() {
    return (
        <div className='App'>
            <h1>Test Component</h1>
        </div>
    )

    // return React.createElement('div', { className: "App" }, React.createElement('h1', null, "Test Component"))
}

export default TestComponent;