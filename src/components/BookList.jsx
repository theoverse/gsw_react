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

    changeInput = e => {
        this.setState({
            books: [
                { bookName: e.target.value, writer: "Author 1" },
                { bookName: "New Title 2", writer: "Author 2" },
                { bookName: "New Title 3", writer: "Author 3" },
            ]
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
        // console.log(bookState)
        const books = bookState.map(book => {
            // console.log(book)
            // console.log(book.bookName)
            // console.log(book.writer)
            return (
                <Book
                    bookName={book.bookName}
                    writer={book.writer}
                />
            )
        })


        return (
            <div className="App">
                <h1 style={style}>Book List</h1>

                <button onClick={this.changeBookState}>Change State</button>

                <br />

                <input type="text" onChange={this.changeInput} />

                {/* <Book bookName={this.state.books[0].bookName} writer={this.state.books[0].writer} />
                <Book bookName={this.state.books[1].bookName} writer={this.state.books[1].writer} />
                <Book bookName={this.state.books[2].bookName} writer={this.state.books[2].writer} change={this.changeBookState} /> */}

                {books}
            </div>
        )
    }
}

export default BookList