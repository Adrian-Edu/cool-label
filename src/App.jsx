import React from 'react';
import { useState } from 'react';
import './App.css';

function App() {

  const [dataInput, setDataInput] = useState({nume: "", prenume: "", email: ""})
  const [dataMessage, setDataMessageSubmit] = useState(false)  
  const [errorName, setErrorName] = useState(false)
  const [errorPrenume, setErrorPrenume] = useState(false)
  const [errorEmail, setErrorEmail] = useState(false)
  const [submit, setSubmit] = useState("")
  const [showDataSubmit, setShowDataSubmit] = useState(false)

  const handleName = (e) => {
   setDataInput({...dataInput, nume:e.target.value}) 
   
   if (dataInput.nume !== " ") {
    setErrorName(false)
   }
  }

  const handlePrenume = (e) => {
    setDataInput({...dataInput, prenume:e.target.value}) 

    if (dataInput.prenume !== " ") {
      setErrorPrenume(false)
     }
   }

   const handleEmail = (e) => {
    setDataInput({...dataInput, email:e.target.value}) 

    if (dataInput.email !== " ") {
      setErrorEmail(false)
     }
   }

   const handleSubmit = (e) => {
    e.preventDefault()

    setSubmit(dataInput.nume + " " + dataInput.prenume + " " + dataInput.email)

      
      if (dataInput.nume === "" && dataInput.prenume === "" && dataInput.email === "")  {
      return setErrorName(true) + setErrorPrenume(true) + setErrorEmail(true) 
    } else if (dataInput.nume === "")  {
      return setErrorName(true)
    } else if (dataInput.prenume  === "") {
      return setErrorPrenume(true)
    } else if (dataInput.email === "") {
      return setErrorEmail(true) 
    } else {
      setShowDataSubmit(true) || setDataMessageSubmit(true) 
    }
    
    setErrorName (false)
    setErrorPrenume (false)
    setErrorEmail (false)
   }

  return (
    <div className="App">
      <header className="App-header">
      <form className='container' onSubmit={handleSubmit} >

      <input type="text" placeholder='Nume' value={dataInput.nume} onChange={handleName}></input>
      { errorName ?  <div><span>Va rog sa completati campul nume!</span></div>  : null }
      <input type="text" placeholder='Prenume' value={dataInput.prenume} onChange={handlePrenume}></input>
      { errorPrenume ? <div><span>Va rog sa completati campul prenume!</span> </div> : null } 
      <input type="text" placeholder='E-mail' value={dataInput.email} onChange={handleEmail}></input>
      { errorEmail ? <div> <span>Va rog sa completati adresa de e-mail!</span> </div>: null} 
      <button>Trimite</button>

      { dataMessage ? <div><p> Va multumim pentru inregistrare. </p></div> : null } 

      { showDataSubmit ? <div><p>{submit}</p></div> : null } 
      
      </form>
      </header>
    </div>
  );
}

export default App;
