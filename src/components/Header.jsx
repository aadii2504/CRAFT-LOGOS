import React from 'react'
import { Button } from './ui/button'
import { Download } from 'lucide-react'

function Header() {
  return (
    <div className='p-4 shadow-sm border flex justify-between items-center'>

          <img src='/CRAFT2.png' className='w-30 h-16' alt='Logo'/> 

        <Button className='flex gap-2 items-center rounded'> <Download className='h-5 w-5'/> Doownlode Now</Button>

    </div>
  )
}

export default Header