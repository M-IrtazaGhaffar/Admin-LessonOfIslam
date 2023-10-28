import React from 'react'
import { Link } from 'react-router-dom'

function Notfound() {
  return (
    <div className='min-h-screen min-w-full flex justify-center items-center flex-col gap-4 text-center p-10'>
        <h1 className='text-4xl text-[#FF385C] font-bold'>
            404 | Page Not Found
        </h1>
        <p>
            We're sorry for this interruption!
        </p>
        <Link to='/dashboard' className='bg-[#FF385C] text-white px-3 py-1 rounded cursor-pointer shadow-xl'>Dashboard</Link>
    </div>
  )
}

export default Notfound