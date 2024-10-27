import React from 'react'
import Header from './components/content/Header'
import ItemListContainer from './components/ItemListContainer/ItemListConatiner'
import './App.css'
import './Reset.css'
import NavBar from './components/content/NavBar'

function App() {
  

  return (
    <div className="wrapper">

    <Header />
    <NavBar />
    <ItemListContainer />
    </div>
    
  )
}

export default App
