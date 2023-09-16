import React from 'react'

function Footer() {
  return (
    <div className='flex h-[50px] justify-center text-center font-mono text-[12px] text-white md:mt-[400px] mt-[200px] items-center'>
    {new Date().getFullYear()} | DayDox | India
  </div>

  )
}

export default Footer