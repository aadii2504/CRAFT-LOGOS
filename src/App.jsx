import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/button'
import Header from './components/Header'
import SideNav from './components/SideNav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

        <Header/> 

      <div className='w-64 fixed'>
        <SideNav selectedIndex={(value)=>console.log(value)}/> 
      </div>

        <div className='ml-64'>
          Body
        </div>
    </>
  )
}

export default App
