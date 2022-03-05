import React, { Component } from 'react'
import Book from './Book'

export class BookList extends Component {

    // create state method 1
    state = {
        books: [
            { bookName: "Title 1", writer: "Author 1" },
            { bookName: "Title 2", writer: "Author 2" },
            { bookName: "Title 3", writer: "Author 3" },
        ]
    }

    // create state method 2
    // constructor() {
    //     super();
    //     this.state = {}
    // }

    render() {
        return (
            <div className="App">
                <h1>Book List</h1>
                <Book bookName={this.state.books[0].bookName} writer={this.state.books[0].writer} />
                <Book bookName={this.state.books[1].bookName} writer={this.state.books[1].writer} />
                <Book bookName={this.state.books[2].bookName} writer={this.state.books[2].writer} />
            </div>
        )
    }
}

export default BookList