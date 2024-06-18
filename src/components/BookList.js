import React, { Component } from 'react';

class BookList extends Component {
   
    render() { 
        return (
            <div className='book-list'>
                <ul>
                    <li>the way of kings</li>
                    <li>the way of the wind</li>
                    <li>new man in here</li>
                </ul>
            </div>
        );
    }
}
 
export default BookList;
