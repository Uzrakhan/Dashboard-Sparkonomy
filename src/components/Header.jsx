import React from 'react';
import { ChevronLeft, Crown } from 'lucide-react';


const Header = () => {
  return (
    <header className='bg-gradient-to-r from-purple-200 to-pink-200 flex justify-between items-center px-2 lg:px-2 lg:py-4 py-4 z-0 relative'>
        <button>
            <ChevronLeft />
        </button>
        <h2 className='text-lg font-semibold lg:text-xl text-gray-800'>
            Dashboard
        </h2>
        <div className='w-10 h-10 rounded-full overflow-hidden lg:w-10 lg:h-10'>
            <img 
                src='https://plus.unsplash.com/premium_photo-1675080431524-3e7c85323972?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFuJTIwZmFjZXxlbnwwfHwwfHx8MA%3D%3D'
                className='w-full h-full object-cover'
            />
        </div>
    </header>
  )
}

export default Header