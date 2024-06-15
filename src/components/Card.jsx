import React from 'react';
import './Card.css';
 

function Card( props ) {

    console.log(props);

    return (
            <div className = "card_container">
                <h1> { props.id } </h1>
                <h2> { props.title } </h2>
                <img className = "img" src = { props.src } />
                <p> { props.desc } </p>
                <button className = "new_btn"> { props.button } </button>
            </div>
    );
}

export default Card;