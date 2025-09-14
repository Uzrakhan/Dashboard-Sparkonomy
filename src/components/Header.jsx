import React from 'react';
import { ArrowLeft } from 'lucide-react';


const Header = () => {
  return (
    <div className='bg-purple-300 flex justify-between items-center h-full rounded-xl w-full p-4'>
        <button>
            <ArrowLeft />
        </button>
        <h2 className='font-semibold'>
            Dashboard
        </h2>
        <div>
            <img 
                src='https://plus.unsplash.com/premium_photo-1675080431524-3e7c85323972?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFuJTIwZmFjZXxlbnwwfHwwfHx8MA%3D%3D'
                className='w-8 h-8 inline-block rounded-full object-cover'

            />
        </div>
    </div>
  )
}

export default Header