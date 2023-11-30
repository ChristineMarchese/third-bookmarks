// import { useState } from 'react'
import NavBar from './Components/NavBar'
import './App.css'
import Index from './Pages/Index'
import { Routes, Route } from 'react-router-dom';

function App() {
  

  return (
    <>
       <NavBar />
       <main>
        <Routes>
          <Route path="/bookmarks" element={<Index/>}/> 
        </Routes> 
       </main>
    </>
  )
}

export default App
