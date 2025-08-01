import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('black');
  
  const changebgColor = (newColor) => {
    setColor(newColor);
    console.log("Background color changed to:", newColor);
  }
  const resetColor = () => {
    setColor('bg-white');
    console.log("Background color reset to white");
  }
  return (
    <>
    <div className='w-full h-screen duration-200' style={{ backgroundColor: color }}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-1'>
        <div className='flex flex-wrap justify-center px-4 shadow-lg bg-white py-2 rounded-3xl'>
          <button className='outline-none px-4 py-1 rounded-full shadow-lg' style={{backgroundColor:"eed"}}
            onClick={() => changebgColor('red')}>Red
          </button>
          <button className='outline-none px-4 py-1 rounded-full shadow-lg' style={{backgroundColor:"Green"}} 
            onClick={() => changebgColor('green')}>Green
          </button>
          <button className='outline-none px-4 py-1 rounded-full shadow-lg' style={{backgroundColor:"blue"}} 
            onClick={() => changebgColor('blue')}>Blue
          </button>
          <button className='outline-none px-4 py-1 rounded-full shadow-lg' style={{backgroundColor:"olive"}} 
            onClick={() => changebgColor('olive')}>Olive
          </button>
          <button className='outline-none px-4 py-1 rounded-full shadow-lg' style={{backgroundColor:"yellow"}} 
            onClick={() => changebgColor('yellow')}>Yellow
          </button>
          <button className='outline-none px-4 py-1 rounded-full shadow-lg' style={{backgroundColor:"violet"}} 
            onClick={() => changebgColor('violet')}>Demo
          </button>
        </div>
      </div>
    </div>
    </>
  )
}
export default App