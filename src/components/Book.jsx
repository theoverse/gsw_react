import React from 'react';

const Book = props => {
    return (
        <div>
            <h3 onClick={props.change}>Book: {props.bookName} <br /> Author: {props.writer}</h3>
        </div>
    )
}

export default Book