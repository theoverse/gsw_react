import React from 'react';
import './App.css';
import Book from './components/Book';

// JSX
function App() {
  return (
    <div className="App">
      <h1>Theoverse</h1>
      <Book bookName="Title 1" writer="Author 1" />
      <Book bookName="Title 2" writer="Author 2" />
      <Book bookName="Title 3" writer="Author 3" />
    </div>
  );
}

export default App;
