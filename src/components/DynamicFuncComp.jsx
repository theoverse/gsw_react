import React from 'react';
import './App.css'

// dynamic functional component
let DynamicFuncComp = (props) => {
    console.log(props)
    return (
        <div className='App'>
            {/* <h1>Dynamic Functional Component</h1>
            <h3> Name: {props.name} <br /> Age: {props.age}</h3>
            <h3> Children Data: {props.children}</h3> */}
        </div>
    )
}


export default DynamicFuncComp