import React from 'react'
import logo from '../../assets/img/ddlogo.png'
function HeaderLanding() {
  return (
    <div className='flex items-center justify-between  m-4 px-1'>
      <div className='flex items-center gap-2'>
      <img src={logo} className="w-[50px] md:w-[60px]  rounded-full shadow-md" alt="logo" />
      <h1 className='text-white font-bold text-[25px] md:text-[30px]'>DayDox</h1>
      </div>
     
      <button className='text-white font-bold border-[1px] rounded-lg md:h-[35px] md:w-[120px] h-[30px] w-[80px] text-[15px]  hover:scale-110 ' >Login</button>

      
    </div>
  )
}

export default HeaderLanding
