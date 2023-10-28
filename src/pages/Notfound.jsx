import React from 'react'

function Notfound() {
  return (
    <div className='min-h-screen min-w-full flex justify-center items-center flex-col gap-4 text-center'>
        <h1 className='text-4xl text-[#FF385C] font-bold'>
            404 | Page Not Found
        </h1>
        <p>
            We're sorry for this interruption!
        </p>
    </div>
  )
}

export default Notfound