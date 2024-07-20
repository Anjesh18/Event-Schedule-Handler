import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='flex flex-row-reverse justify-start items-end mb-7 bg-green-300 rounded-lg p-4'>
      <div className='flex flex-row align-center justify-center'>
<ul className='flex flex-row justify-between mr-6 space-x-11'>
   <Link to='/'><li className='mr-7 font-bold text-2xl'>Home</li></Link>
   <Link to='/find-events'> <li className='font-bold text-2xl'>Find Events</li></Link>
</ul>
      </div>
    </div>
  )
}
