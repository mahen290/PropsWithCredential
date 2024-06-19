import React from 'react';
import Card from "./Card";
import Car from "../assets/Car.jpg";
import MikeBird from "../assets/MikeBird.jpg";
import Tiger from "../assets/Tiger.jpg";
 
function Credential() {
    const credentials = [

        { id : 1, title : "Car_1", src : Car, desc : "Red Car Model No. 21009", button : "Book - Now" },

        { id : 2, title : "Car_2", src : MikeBird, desc : "Blue Car MikeBird Model No. 811", button : "Order - Now" },

        { id : 3, title : "Car_3", src : Tiger, desc : "This is Ferrari Car", button : "Booked" },

        { id : 4, title : "Car_4", src : MikeBird, desc : "This is Tata Swift Color Blue", button : "Not - Available" }
    ];

  return (
    <div className = "card_wrapper"> 
      { 
          credentials.length > 0 && credentials.map( ( item ) => (
            <Card key = { item.id } title = { item.title } src = { item.src } desc = { item.desc } button = { item.button } /> )
          )
      }
    </div>
  );
}

export default Credential;
