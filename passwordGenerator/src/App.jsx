/* eslint-disable no-unused-vars */
import { useState, useCallback, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')

  const passwordRef = useRef(null)

  const generatePassword = useCallback(() => {
    let pass = ''
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str += "0123456789"

    if(charAllowed) str += "!@#$%^&*()_+~`"


    for(let i = 1; i<length; i++) {
      const index = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(index)
    }
    setPassword(pass)
  
  }, [length, numberAllowed, charAllowed])



  useEffect(()=>{
    generatePassword();
  }, [length, numberAllowed, charAllowed, generatePassword])


  const copyPasswordToClipBoard = () => {
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select()
  }



  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-5 py-3 my-10 bg-gray-800 text-orange-500'>
      
      <h1 className='text-white text-center my-3'>Password Generator</h1>

      <div className='flex shadow rounded-lg overflow-hidden mb-4 bg-white'>
        <input 
          type="text" 
          value={password}
          className='outline-none w-full py-1 px-3 font-semibold'
          readOnly
          placeholder='Password'
          ref={passwordRef}
        />
        <button 
        onClick={copyPasswordToClipBoard}
        className='outline-none bg-blue-600 text-white 
        px-3 py-0.5 shrink-0 hover:bg-blue-800 cursor-pointer'>
          copy
        </button>
      </div>
      
      
      
      <div className='flex justify-between'>

        <div className='flex items-center gap-x-1'>

          <input 
            type="range" 
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            name=''
            id=''
            onChange={(e) => setlength(e.target.value)}
          />
          <label htmlFor="length">Length: {length}</label>

        </div>

        <div className='flex items-center gap-x-1'>

          <input 
            type="checkbox" 
            defaultChecked = {numberAllowed}
            className='cursor-pointer'
            onChange = {() => {
              setNumberAllowed((prev) => !prev)
            }}
            name=''
            id=''
          />
          <label htmlFor="number">Numbers</label>

        </div>

        <div className='flex items-center gap-x-1'>

          <input 
            type="checkbox" 
            defaultChecked = {charAllowed}
            className='cursor-pointer'
            onChange = {() => {
              setCharAllowed((prev) => !prev)
            }}
            name=''
            id=''
          />
          <label htmlFor="charInput">Characters</label>

        </div>

      </div>

    </div>
  )
}

export default App
