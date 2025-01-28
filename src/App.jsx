import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count,setcount]=useState(15)

  let addition=()=>{

   setcount(count+5);
  }
  let substraact=()=>{

    setcount(count-5);
   }
 

  return (
    <>
     <h1>counter{count}</h1>
      <button onClick={addition}>addition by </button>
      <button onClick={substraact}>substract by 5</button>

    </>
  )
}

export default App
