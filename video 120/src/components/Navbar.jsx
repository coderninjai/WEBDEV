import React from 'react'

import { useSelector,useDispatch } from 'react-redux'
const Navbar = () => {
    
 const count = useSelector((state) => state.counter.value)

  return (
    <div>
      I am a nav {count}
    </div>
  )
}

export default Navbar

// OCD - OBSESSIVE COMPULSIVE DISORDER