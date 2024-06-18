import React from 'react';
 
function Card( { key, title, src, desc, button } ) {

    return (
        <div className = "card">
            <h1> { key } </h1>
            <h2> { title } </h2>
            <img src = { src } />
            <p> { desc } </p>
            <button className = "new_btn"> { button } </button>
        </div>
    );
}

export default Card;