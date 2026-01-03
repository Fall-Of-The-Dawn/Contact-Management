import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx'
import FindContacts from './pages/FindContacts.jsx'
import PageNotFound from './pages/404.jsx'
import Navbar from './componenets/Navbar.jsx'
function App() {
  return (
    <>
    <Navbar />
    <div className='bg-gradient-to-r from-cyan-500 to-blue-500'>
      <Routes>
        <Route path='/'  element={<Home />}/>
        <Route path='/contact'  element={<Contact />}/>
        <Route path='/findContacts'  element={<FindContacts />}/>
        <Route path='*'  element={<PageNotFound />}/>
      </Routes>
    </div>
    </>
  )
}
 
export default App
