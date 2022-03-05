import React from 'react';

const Book = props => {
    return (
        <div>
            <h1>Book Page</h1>
            <h3>Book: {props.bookName} <br /> Author: {props.writer}</h3>
        </div>
    )
}

export default Book