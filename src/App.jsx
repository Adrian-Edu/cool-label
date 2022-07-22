import React from 'react';
import { useState } from 'react';
import './App.css';

function App() {

  const [dataInput, setDataInput] = useState({nume: "", prenume: "", email: ""})
  const [dataMessage, setDataMessageSubmit] = useState(false)  
  const [errorMessage, setErrorMessage] = useState(false)
  const [submit, setSubmit] = useState("")

  const handleName = (e) => {
   setDataInput({...dataInput, nume:e.target.value}) 
  }

  const handlePrenume = (e) => {
    setDataInput({...dataInput, prenume:e.target.value}) 
   }

   const handleEmail = (e) => {
    setDataInput({...dataInput, email:e.target.value}) 
   }

   const handleSubmit = (e) => {
    setSubmit(dataInput.nume + " " + dataInput.prenume + " " + dataInput.email)

    console.log(submit)
    
    e.preventDefault()

    if(dataInput.nume === " " || dataInput.prenume === "" || dataInput.email === "")  {
      return setErrorMessage(true)
    } else if (dataInput.nume !== " " || dataInput.prenume !== "" || dataInput.email !== "")  {
      setDataMessageSubmit(true)
    }

   }

  return (
    <div className="App">
      <header className="App-header">
      <form className='container' onSubmit={handleSubmit} >

      <input type="text" placeholder='Nume' value={dataInput.nume} onChange={handleName}></input>
      { errorMessage ?  <div><span>Va rog sa completati campul nume!</span></div>  : null }
      <input type="text" placeholder='Prenume' value={dataInput.prenume} onChange={handlePrenume}></input>
      { errorMessage ? <div><span>Va rog sa completati campul prenume!</span> </div> : null } 
      <input type="text" placeholder='E-mail' value={dataInput.email} onChange={handleEmail}></input>
      { errorMessage ? <div> <span>Va rog sa completati adresa de e-mail!</span> </div>: null} 
      <button>Submit</button>

      { dataMessage ? <div><p> Va multumim pentru inregistrare! </p></div> : null } 

      <div><p>{submit}</p></div>
      
      </form>
      </header>
    </div>
  );
}

export default App;
