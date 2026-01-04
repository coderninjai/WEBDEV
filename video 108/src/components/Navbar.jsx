import React, {useEffect} from 'react'

const Navbar = ({color}) => {
    useEffect(() => {
      alert("color was chaged")
      
    }, [color])
    
  return (
    <div>
      I am a navbar of {color} color ...
    </div>
  )
}

export default Navbar
