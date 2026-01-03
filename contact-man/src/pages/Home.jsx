import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <>
      {/*I used daisi UI's components for all the styling */}
      <div className="hero bg-base-200 min-h-screen bg-gradient-to-r from-cyan-600 to-blue-900">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Welcome to Uravadi</h1>
            <p className="py-6">
              The best place to store your contacts. Your contacts are safe with us
            </p>
            <button className="btn btn-primary text-white bg-gradient-to-r from-green-900 to-black-900" ><Link to="/contact">Get Started</Link></button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home