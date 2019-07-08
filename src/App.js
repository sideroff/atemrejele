import React, { useState, useEffect } from 'react'
import { Router } from 'components/root'

function App() {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    console.log('here baby')
    return () => console.log('cleanup baby')
  },[])

  return <div>
    {counter}
    <button onClick={() => setCounter(counter + 1)}>Increment me!</button>

  </div>

  return <Router />
}

export default App
