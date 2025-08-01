import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

/*
  let counter = 5;

  const addValue = () =>{
    counter = counter + 1;
    setCounter(counter)
    console.log("Value Added :",counter);
  }

  const removeVlue = ()=>{
    counter = counter - 1;
    setCounter(counter);
    console.log("Value Added :",counter);
  }

  */

  const addValue = ()=>{
    setCounter (prev=>{
      const updated = prev+1;
      console.log("Value Added",updated);
      return updated;
    })
  }

  const removeVlue =()=>{
    setCounter(prev=>{
      const updated = prev - 1;
      console.log("Value Reduced")
      return updated;
    })
  }
  
  return (
    <>
      <h1>Chai aur react</h1>
      <p>Counter value : {counter} </p>

      <button onClick={addValue}>Add Value{counter}</button>
      <br/>
      <button onClick={removeVlue}>Remove Value{counter}</button>

    </>
  )
}

export default App
