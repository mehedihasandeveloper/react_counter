import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)

  const addValue = () => {
    counter = counter + 1
    setCounter(counter)
  }

  const removeValue = () => {
    if (counter != 0) {
      counter = counter - 1
      setCounter(counter)
    } else {

    }

  }
  return (
    <>
      <h1>
        Keep Trying Mehedi. InShaAllah Allah will help you!
      </h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
