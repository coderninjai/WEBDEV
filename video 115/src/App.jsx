import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './componets/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './componets/Home'
import Login from './componets/Login'
import User from './componets/User'

function App() {
  const [count, setCount] = useState(0)
  const router = createBrowserRouter([
    {
      path: "/",
      element: <>  <Navbar /><Home /></>
    },
    {
      path: "/login",
      element: <> <Navbar /><Login /></>
    },
    {
      path: "/User/:username",
      element: <> <Navbar /><User /></>
    }
  ])
  return (
    <>

      <RouterProvider router={router} />
    </>
  )
}

export default App
