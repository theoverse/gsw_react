import React, { Component } from 'react'
import Book from './Book'

export class BookList extends Component {

    state = {
        books: [
            { bookName: "Title 1", writer: "Author 1" },
            { bookName: "Title 2", writer: "Author 2" },
            { bookName: "Title 3", writer: "Author 3" },
        ]
    }

    changeBookState = () => {
        // console.log("Clicked")
        this.setState({
            books: [
                { bookName: "New Title 1", writer: "Author 1" },
                { bookName: "New Title 2", writer: "Author 2" },
                { bookName: "New Title 3", writer: "Author 3" },
            ]
        })
    }

    render() {
        return (
            <div className="App">
                <h1>Book List</h1>

                <button onClick={this.changeBookState}>Change State</button>

                <Book bookName={this.state.books[0].bookName} writer={this.state.books[0].writer} />
                <Book bookName={this.state.books[1].bookName} writer={this.state.books[1].writer} />
                <Book bookName={this.state.books[2].bookName} writer={this.state.books[2].writer} change={this.changeBookState} />
            </div>
        )
    }
}

export default BookList