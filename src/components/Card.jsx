import React from 'react';
import './Card.css';
import Credential from './Credential';

// function Card( props ) {
//   return (
//     <div className = "card_container">
//       <h2> { props.title } </h2>
//       <img src = { props.source } />
//       <p> { props.desc } </p>
//       <button className ="new_btn"> { props.btn } </button>
//     </div>
//   );
// }



// function Card( props ) {

//     console.log( props );

//     return (
        
//         <div> 
            
//         </div>
        
//     );

// }



function Card( { title, source, desc, btn, index } ) {

    return (
        <div>
            <div className = "card_container">

                <h2> { title } </h2>
                <img src = { source } />
                <p> { desc } </p>
                <button className ="new_btn"> { btn } </button>

            </div>
            <div> 
                { index }
                <Credential />  
            </div> 
        </div>
    );
}

export default Card;