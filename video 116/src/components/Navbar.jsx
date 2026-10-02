import React, { useContext } from 'react'
import Button from './Button'
import { counterContext } from '../context/context'
const Navbar = () => {
  const value=useContext(counterContext)
  return (
    <>
      <nav>{value.count}</nav>
    <div>
      

       <button onClick={() => value.setCount((count) => count + 1)}>I am a button </button>
    </div>
    <Button/>
    </>
  )
}

export default Navbar
