import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TestComponent from './TestComponent';
import Person from './Person'
import DynamicFuncComp from './DynamicFuncComp'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <TestComponent />
    <Person />
    {/* pass object property data */}
    <DynamicFuncComp name="John" age="21" > Children Object Propery Value </DynamicFuncComp>
    <DynamicFuncComp name="Marco" age="23" />
    <DynamicFuncComp name="Tom" age="22" />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
