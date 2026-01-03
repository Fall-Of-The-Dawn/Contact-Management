import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm bg-gradient-to-r from-cyan-700 to-blue-900">
        <div className="navbar-start">
        <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            
        </div>
        <a className="btn btn-ghost text-xl">Uravadi</a>
        </div>
        <div className="navbar-center hidden lg:flex">
        
        </div>
        <div className='navbar-center hidden lg:flex'>
          <Link to="/" className="btn btn-ghost normal-case text-xl">Home </Link>
          <Link to="/findContacts" className="btn btn-ghost normal-case text-xl">Find Contacts</Link>
          <Link to="/contact" className="btn btn-ghost normal-case text-xl">Add Contact</Link>
        </div>
        <div className="navbar-end">
       
        </div>
    </div>
  )
}

export default Navbar