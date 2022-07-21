import React from 'react';
import { useState } from 'react';
import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
      <form className='container'>

      <input type="text" placeholder='Nume' ></input>
      <input type="text" placeholder='Prenume'></input>
      <input type="text" placeholder='E-mail'></input>
      <button>Submit</button>

      </form>
      </header>
    </div>
  );
}

export default App;
