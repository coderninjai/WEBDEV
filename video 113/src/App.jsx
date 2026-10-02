import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [cards, setcards] = useState([])

  const fetchData = async () => {
    let a = await fetch("https://jsonplaceholder.typicode.com/posts")
    let data = await a.json()
    setcards(data)
    console.log(data)
  }
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <div className="constainer">
        {cards.map((card) => {
          return <div key={card.title} className="card">
            <h1>{card.title}</h1>
            <p>{card.body}</p>
            <span>by userid:
              {card.body}
            </span>
          </div>
        })}

      </div>

    </>
  )
}

export default App
