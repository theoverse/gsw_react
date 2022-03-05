import React from 'react';
import './App.css';
import Book from './components/Book';
import BookList from './components/BookList';

// JSX
function App() {
  return (
    <div className="App">
      <h1>Theoverse</h1>
      <BookList />
    </div>
  );
}

export default App;
