import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Card  from './components/Card'
const App = () => {
  return (
    <div>
      <Navbar/>

      <main>
        This is main content 
        <Card/>
        <Card title="name"/>
        <Card/>
      </main>
      <Footer/>
    </div>
  )
}

export default App
