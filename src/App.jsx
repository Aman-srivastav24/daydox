import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import HeaderLanding from './components/LandingPage/HeaderLanding'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
     <HeaderLanding/>
   </div>
  )
}

export default App
