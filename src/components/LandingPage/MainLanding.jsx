import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import logo from '../../assets/img/dd.png'
function MainLanding() {
  return (
    <div>
        <div className='flex flex-col  w-[100%] text-center h-[100px] '>
            
            <span className='m-6 text-white  text-[25px]   md:text-[35px] font-mono'><TypeAnimation
      sequence={[
        
        'We Are Here To Listen :)',
        1000, 
      
      ]}
      wrapper="span"
      speed={22}
      
      repeat={Infinity}
    /></span>
            </div>
            <div className='flex flex-col justify-center items-center md:flex-row '>
                <img src={logo} alt="Daydox" srcset="" className='w-[280px] rounded-[40px] m-6' />
                <div className='text-white font-mono px-8 m-8 w-[450px] md:w-[600px] text-[15px]'>
                "Welcome to DayDox, your personal space for self-expression and reflection. Write and preserve your thoughts, memories, and experiences effortlessly. Explore self-discovery and stress relief through journaling. Start your personal diary journey today."</div>
            </div>
    </div>
  )
}

export default MainLanding