import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Card from './components/card'
import Dashboard from './components/dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Dashboard/> */}
    <Navbar/>
    <Card username="Sarvesh" btnText="Click"/>
    <Card username="Rishab" btnText="Submit"/>
    </>
  )
}

export default App
