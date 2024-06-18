import React, { useState } from 'react';
import Credential from './components/Credential';

function App() {

    const [ x, setX ] = useState ( 0 );

  return (
    <div>
        <header className = "header"> Most Welcome In Our Digital World </header>
        <div className = "container">
            <h1 className = "update_count"> Count : { x } </h1>
            <button className = "btn" onClick = { () => setX ( x + 1 ) }> Increment Counter </button>
            <button className = "btn" onClick = { () => setX ( x - 1 ) }> Decrement Counter </button>
        </div>
        <Credential />
    </div>
  );
}

export default App;
