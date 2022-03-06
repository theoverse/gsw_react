import React, { Component } from 'react'
import Book from './Book'

export class BookList extends Component {

    state = {
        books: [
            { id: 1, bookName: "Title 1", writer: "Author 1" },
            { id: 2, bookName: "Title 2", writer: "Author 2" },
            { id: 3, bookName: "Title 3", writer: "Author 3" },
        ],
        showBooks: true
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

    changeInput = (e, index) => {
        const book = {
            ...this.state.books[index]
        }
        book.bookName = e.target.value;
        const books = [...this.state.books];
        books[index] = book;

        this.setState({ books: books });
    }

    deleteBookState = index => {
        const books = this.state.books;
        books.splice(index, 1);
        this.setState({
            books
        })
    }

    toggleBooks = () => {
        this.setState({ showBooks: !this.state.showBooks })
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

        let books = null;

        if (this.state.showBooks) {
            books = bookState.map((book, index) => {
                return (
                    <Book
                        bookName={book.bookName}
                        writer={book.writer}
                        delete={() => this.deleteBookState(index)}
                        key={book.id}
                        inputName={e => this.changeInput(e, index)}
                    />
                )
            })
        } // end if condition

        return (
            <div className="App">
                <h1 style={style}>Book List</h1>
                <button onClick={this.toggleBooks}>Toggle Books</button>
                {/* {this.state.showBooks ? books : null} */}
                {books}
            </div>
        )
    }
}

export default BookList;