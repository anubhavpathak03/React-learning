/* eslint-disable no-unused-vars */
import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import Cards from './components/cards'

function App() {
  // const [count, setCount] = useState(0)
  let myArr = [1, 2, 3, 4, 5, 6, 7];
  return (
    <>
      <h1 className='text-3xl bg-green-600 p-3 rounded-lg'>Vite with tailwindcss</h1>

      <div className='grid grid-cols-3 gap-4 m-4'>

        <Cards 
          userName="Anubhav Pathak" 
          post="Software Engineer, Google"
          image="https://images.pexels.com/photos/16129724/pexels-photo-16129724/free-photo-of-man-working-on-computers-coding.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          about="Loves Technology And Learning New Things"
        />
        <Cards 
          userName='Anubhav Pathak'
          post = "photography" 
          image="https://images.pexels.com/photos/253905/pexels-photo-253905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          about="A loves for PhotoGraphy gives me new life every day"
          newArr = {myArr}

        />
        <Cards 
          userName='Anubhav Pathak'
          post = "Solo Traveller"
          image="https://images.pexels.com/photos/31362674/pexels-photo-31362674/free-photo-of-silhouette-of-photographer-at-sunset-on-mountain-ridge.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          about="A Solo Travelling gives me new perspective of life"

        />
        <Cards 
          userName='Anubhav Pathak'
          post = "Artist"
          image="https://images.pexels.com/photos/102127/pexels-photo-102127.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          about="I'm Artist. Making art which makes everyone happy and amaze"

        />
        <Cards 
          userName='Anubhav Pathak'
          post = "Solo Traveller"
          image="https://images.pexels.com/photos/103889/pexels-photo-103889.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          about="A Solo Travelling gives me new perspective of life"

        />
        <Cards 
          userName='Anubhav Pathak'
          post = "Solo Traveller"
          image="https://images.pexels.com/photos/103889/pexels-photo-103889.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          about="A Solo Travelling gives me new perspective of life"

        />
      </div>
    </>
  )
}

export default App
