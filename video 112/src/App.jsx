import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [name, setName] = useState("ninja")
  const [count, setCount] = useState(0)
  const handleClick=()=>{
    alert("Hey I am clicked")
  }

  const handleMouseOver=()=>{
    alert("hey I am mouse Over")
  }
  const handleChange=(e)=>{
   setName(e.target.value)
  }
  return (
    <>
      <div className="button">
        <button onClick={handleClick}>Click me</button>
      </div>

      {/* <div className="red" onMouseOver={handleMouseOver}>I am red div</div> */}
      
      <input type="text" value={name} onChange={handleChange} />
    </>
  )
}

export default App
