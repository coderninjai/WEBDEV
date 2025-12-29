import React from 'react'

const Navbar = ({logoText}) => {
    return (
        <div >
            <ul className='nav'>
                <li>Home </li>
                <li>about </li>
                <li>Home </li>
        <div className='logo'>{logoText}</div>
            </ul>
        </div>
    )
}

export default Navbar
