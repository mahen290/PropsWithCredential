import React from 'react';
import './Card.css';

function Card( props ) {

    console.log(props);

    return (
            <div className = "card_container">
                <h2> { props.title } </h2>
                <img src = { props.src } />
                <p> { props.desc } </p>
                <button className ="new_btn"> { props.button } </button>
            </div>
    );
}

export default Card;