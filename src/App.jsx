import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/button'
import Header from './components/Header'
import SideNav from './components/SideNav'
import IconController from './components/IconController'
import BackgroundController from './components/BackgroundController'

function App() {
  const [count, setCount] = useState(0)
  const[selectedIndex,setselectedIndex]=useState();

  return (
    <>

        <Header/> 

      <div className='w-64 fixed'>
        <SideNav selectedIndex={(value)=>setselectedIndex(value)}/> 
      </div>

        <div className='ml-64 grid grid-cols-1 md:grid-cols-6'>
         <div className='md:col-span-2 border h-screen shadow-sm p-5'>
          {selectedIndex==0?
          <IconController/>:
          <BackgroundController/> 
        }
           
           
         </div>
         <div className='md:col-span-3 bg-red-500'>
            Icon Preview
         </div>
         <div className='bg-blue-500'>
          Ads Banner
         </div>
        </div>
    </>
  )
}

export default App
