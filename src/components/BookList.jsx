import React, { Component } from 'react'
import Book from './Book'

export class BookList extends Component {

    state = {
        books: [
            { id: 1, bookName: "Title 1", writer: "Author 1" },
            { id: 2, bookName: "Title 2", writer: "Author 2" },
            { id: 3, bookName: "Title 3", writer: "Author 3" },
        ]
    }

    changeBookState = () => {
        this.setState({
            books: [
                { bookName: "New Title 1", writer: "Author 1" },
                { bookName: "New Title 2", writer: "Author 2" },
                { bookName: "New Title 3", writer: "Author 3" },
            ]
        })
    }

    changeInput = e => {
        this.setState({
            books: [
                { bookName: e.target.value, writer: "Author 1" },
                { bookName: "New Title 2", writer: "Author 2" },
                { bookName: "New Title 3", writer: "Author 3" },
            ]
        })
    }

    deleteBookState = index => {
        const books = this.state.books;
        books.splice(index, 1);
        this.setState({
            books
        })
    }

    render() {

        // inline css
        const style = {
            border: "1px solid red",
            borderRadius: "5px",
            backgroundColor: "Red",
            color: "white"
        }

        const bookState = this.state.books;
        const books = bookState.map((book, index) => {
            return (
                <Book
                    bookName={book.bookName}
                    writer={book.writer}
                    delete={() => this.deleteBookState(index)}
                    key={book.id}
                />
            )
        })


        return (
            <div className="App">
                <h1 style={style}>Book List</h1>

                <button onClick={this.changeBookState}>Change State</button>

                <br />

                <input type="text" onChange={this.changeInput} />

                {books}
            </div>
        )
    }
}

export default BookList;