import React from 'react'
import { Link } from 'react-router-dom'

function ThankYou() {
  return (
    <div className='relative flex flex-col bg-base-200 justify-center h-screen overflow-hidden'>
      <div className='flex justify-center text-7xl'>      
          Thank You 
      </div>
      <div className="flex justify-center text-3xl">
        We Appreciate Your Input
      </div>
      <br />
      <br />

      <Link to={"/"} className="btn btn-ghost text-white">Click Here To Keep Exploring</Link>
    </div>
  )
}

export default ThankYou