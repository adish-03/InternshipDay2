
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import View from './components/View'
import Add from './components/Add'
import Records from './components/Records'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hey There!</h1>
        <View/>
        <Records/>
        <Add/>  
        
     
    </>
  )
}

export default App