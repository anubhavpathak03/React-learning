/* eslint-disable no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('bg-orange-300')

  const changeColor = (color) => {
    setColor(color)
  }

  return (
    <div className='w-full h-screen duration-400 bg-orange-300' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-0'>
        <div className='flex flex-wrap justify-center w-full max-w-2xl rounded-3xl gap-3 px-3 py-2 '>
          <button onClick={() => setColor('black')} className='bg-amber-50 p-2 rounded-xl cursor-pointer shadow-lg hover:bg-gray-500'>
            BLACK
          </button>
          <button onClick={() => changeColor('red')} className='bg-amber-50 p-2 rounded-xl cursor-pointer shadow-lg hover:bg-red-500'>
            RED
          </button>
          <button onClick={() => changeColor('green')} className='bg-amber-50 p-2 rounded-xl cursor-pointer shadow-lg hover:bg-green-500'>
            GREEN
          </button>
          <button onClick={() => changeColor('blue')} className='bg-amber-50 p-2 rounded-xl cursor-pointer shadow-lg hover:bg-blue-500'>
            BLUE
          </button>
          <button onClick={() => changeColor('purple')} className='bg-amber-50 p-2 rounded-xl cursor-pointer shadow-lg hover:bg-purple-500'>
            PURPLE
          </button>
          <button onClick={() => changeColor('violet')} className='bg-amber-50 p-2 rounded-xl cursor-pointer shadow-lg hover:bg-violet-500'>
            VIOLET
          </button>
          <button onClick={() => changeColor('orange')} className='bg-amber-50 p-2 rounded-xl cursor-pointer shadow-lg hover:bg-orange-500'>
            ORANGE
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
