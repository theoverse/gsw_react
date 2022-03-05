import React from 'react';
import '../stylesheets/Book.css'

const Book = props => {
    return (
        // external css
        <div className='Book'>
            <h3 onClick={props.change}>Book: {props.bookName} <br /> Author: {props.writer}</h3>
        </div>
    )
}

export default Book