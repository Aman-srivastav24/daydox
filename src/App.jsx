import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import HeaderLanding from './components/LandingPage/HeaderLanding'
import MainLanding from './components/LandingPage/MainLanding'
import Footer from './components/LandingPage/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='flex flex-col min-h-screen'>
     <HeaderLanding/>

     <MainLanding/>
     <Footer/>
   </div>
  )
}

export default App
