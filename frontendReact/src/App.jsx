import { useState } from 'react'
import './App.css'
import { Header } from './common/Header/Header'
import { Body } from './pages/Body/Body'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Body/>
    </>
  )
}

export default App
