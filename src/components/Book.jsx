import React from 'react';
import '../stylesheets/Book.css'

const Book = props => {
    return (
        // external css
        <div className='Book'>
            <h3 onClick={props.delete}>Book: {props.bookName} <br /> Author: {props.writer}</h3>
            <input type="text" onChange={props.inputName} value={props.bookName} />
        </div>
    )
}

export default Book