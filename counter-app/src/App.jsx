import { useState } from 'react'

import './App.css'

function App() {
  // let counter = 13
  const [counter, setCounter] = useState(0);

  const addValue = () => {
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    console.log(counter);
  }

  const removeValue = () => {
    // setCounter(counter-1)
    setCounter((prevCounter) => prevCounter - 1)
    setCounter((prevCounter) => prevCounter - 1)
    setCounter((prevCounter) => prevCounter - 1)
    setCounter((prevCounter) => prevCounter - 1)
    console.log(counter);
    
  }
  return (
    <>
      <h1>First React App {counter}</h1>
      <h2>Counter Value: {counter} </h2>
      <button onClick={addValue}>Add Value</button> {" "}
      <button onClick={removeValue}>Remove Value</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
