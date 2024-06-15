import React from 'react';
import './Card.css';

function Card( { title, source, desc, btn } ) {

    return (
        <div>
            <div className = "card_container">
                <h2> { title } </h2>
                <img src = { source } />
                <p> { desc } </p>
                <button className ="new_btn"> { btn } </button>
            </div>
        </div>
    );
}

export default Card;