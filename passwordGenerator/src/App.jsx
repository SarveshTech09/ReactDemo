import { useState, useRef} from 'react'
import { useCallback, useEffect } from 'react'

function App() {
      // This is a simple password generator application built with React. It allows users to generate a random password based on specified criteria such as length, inclusion of numbers, and special characters. The generated password can be copied to the clipboard.
      // State variables to manage password generation settings and the generated password
      // The password is generated based on the selected length, and whether numbers and special characters are allowed.
      // The password can be copied to the clipboard for easy use.
      // The application uses React hooks such as useState, useRef, useCallback, and
      const [length, setLength] = useState(8)
      const [numberAllowed, setNumberAllowed] = useState(false)
      const [charAllowed, setCharAllowed] = useState(false)
      const [password, setPassword] = useState('')
      const passwordRef = useRef('null')

        const passwordgenerator = useCallback(() =>{
            let pass = ''
            let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
            // Adding numbers to the string if numberAllowed is true
            // The characters added are digits from 0 to 9.
            if (numberAllowed) {
              str += '0123456789'
            }
            // Adding special characters to the string if charAllowed is true
            // This allows the user to include special characters in the generated password.
            if (charAllowed) {
              str += '!@#$%^&*()_+[]{}|;:,.<>?'
            }
            // Loop to generate the password
            // The loop runs for the specified length of the password.
            for (let i = 1; i < length; i++)
            {
                let char = Math.floor(Math.random() * str.length + 1)
                pass +=str.charAt(char)
            }
            // Setting the genera ted password to the state variable
            // This updates the password state with the newly generated password.
            setPassword(pass)
          }, 
          [length, numberAllowed, charAllowed, setPassword]
        )

        const copyPasswordToClipboard = useCallback(() => {
          passwordRef.current?.select(),
          passwordRef.current?.setSelectionRange(0, 99) // For mobile devices
          // navigator.clipboard.writeText(password)
          // alert('Password copied to clipboard!')
          // Using the ref to copy the password
          window.navigator.clipboard.writeText(password)
          alert('Password copied to clipboard!')
        },
        [password, passwordRef])
        // useEffect to call the password generator function when dependencies change
        // This ensures that the password is regenerated whenever the length, numberAllowed, or charAllowed
        // state variables change.
        // The useEffect hook is used to trigger the password generation function whenever the dependencies change.
        // This allows the password to be updated dynamically based on user input.
        // The passwordgenerator function is called to generate a new password based on the current settings.
        // The dependencies include length, numberAllowed, and charAllowed.
        // This ensures that the password is regenerated whenever these values change.
        // The useEffect hook is used to call the passwordgenerator function whenever the dependencies change.
        // This allows the password to be updated dynamically based on user input.
        // The passwordgenerator function is called to generate a new password based on the current settings.
        // The dependencies include length, numberAllowed, and charAllowed.
        // This ensures that the password is regenerated whenever these values change.
        useEffect(() => {
          passwordgenerator()
        }, 
        [passwordgenerator, length, numberAllowed, charAllowed])  
        // The App component renders the password generator interface
        // It includes an input field to display the generated password, a button to copy the password
        // to the clipboard, and controls to adjust the password settings such as length, inclusion of numbers, and special characters.
        // The component uses Tailwind CSS classes for styling. 
  return (
      <>
        <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-900 text-orange-500'>
          <h1 className='text-white text-center my-3'>Password Generator</h1>
          <div className='flex shadow rounded-lg overflow-hidden bg-white mb-8'>
            <input 
              type="text"
              value={password} 
              className='outline-none w-full py-1 px-3'
              placeholder='Password Generator'
              readOnly
              ref={passwordRef}
            />
            <button
              onClick={copyPasswordToClipboard}
              // onClick={() => {
              //   navigator.clipboard.writeText(password)
              //   alert('Password copied to clipboard!')
              // }}
              className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>
              Copy
            </button>
          </div>
          <div className='flex text-sm gap-x-2 justify-between mb-4'>
           <div className='flex items-center gap-x-1'>
            <input 
              type="range" 
              min={8}
              max={100}
              value={length} 
              className='cursor-pointer'
              onChange={(e) => setLength(e.target.value)}
              />
              <label>Length{length}</label>
            </div>
            <div className='flex items-center gap-x-1'>
              <input 
                type="checkbox" 
                defaultChecked={numberAllowed}
                id='numberAllowed'
                onChange={(e) => setNumberAllowed((prev) => !prev)}
              />
              <label>Number{numberAllowed}</label>
            </div>
            <div className='flex items-center gap-x-1'>
              <input 
                type="checkbox" 
                defaultChecked={charAllowed}
                id='charAllowed'
                onChange={(e) => setCharAllowed((prev) => !prev)}
              />
              <label>Character{charAllowed}</label>
            </div>
          </div>
        </div>
      </>
  )
}

export default App
