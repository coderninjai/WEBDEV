import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  
  return (
    <div>
      <nav>
        <ul>
           <NavLink className={(e)=>{return e.isActive?"red":""}} to="/"> <li>Home</li></NavLink>
            <NavLink className={(e)=>{return e.isActive?"red":""}} to="/login"><li>login</li></NavLink>
            <NavLink className={(e)=>{return e.isActive?"red":""}} to="/"><li>About Us</li></NavLink>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
