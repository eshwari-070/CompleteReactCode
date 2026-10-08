import React from 'react'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import NavBar from './Components/NavBar'
import { Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <div>
      <h1>Welcome to React Routing</h1>
      <NavBar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}