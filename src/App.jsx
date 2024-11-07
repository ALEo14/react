import React from 'react'
import Navbar from './components/Navbar/Navbar'
import ItemDeailContainer from './components/ItemListContainer/itemDeailContainer'
import ItemListContainer from './components/ItemListContainer/ItemListConatiner'
// import ItemListContainer from './components/ItemListContainer/ItemListConatiner'
// import { BrowserRouter,Route,Routes } from 'react-router-dom'
import './App.css'

function App() {
  

  return (
    <div>
      {/* <BrowserRouter> */}
      <Navbar />
      <ItemDeailContainer itemId={2} />
      {/* <ItemListContainer id={2} />  */}
      {/* <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:id" element={<ItemListContainer />} />
      </Routes>       */}
      
      {/* </BrowserRouter> */}
    </div>
    
  )
}

export default App
