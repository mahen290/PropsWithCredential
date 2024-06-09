import React from 'react';

function Credential() {

    const credentials = [

        { id : 1, title : "Car_1", src : "src\assets\Car_21009.jpg", desc : "This is Red Car Model No. 21009", button : "Book - Now" },

        { id : 2, title : "Car_2", src : "src\assets\MikeBird_Car811.jpg", desc : "This is Blue Car Of MikeBird Company Model No. 811", button : "Order - Now" },

        { id : 3, title : "Car_3", src : "src\assets\Car_21009.jpg", desc : "This is Ferrari Car", button : "Booked" },

        { id : 4, title : "Car_4", src : "src\assets\MikeBird_Car811.jpg", desc : "This is Tata Swift Color Blue", button : "Not - Available" }
    ];

  return (
    <div> 
      { 
          credentials.length > 0 && credentials.map( ( index ) => ( 
              <Card credentials = { index } /> ) )

          // { credentials.length > 0 && credentials.map( ( item ) => ( 
          //     <Card key = { item.id } title = { item.tit } src = { item.src } desc = { item.description } button = { item.button } /> ) )
          // }
      }
    </div>
  );
}

export default Credential;
