import React from 'react';
import { ArrowLeft } from 'lucide-react';


const Header = () => {
  return (
    <div className='bg-purple-300 flex justify-between items-center'>
        <button>
            <ArrowLeft />
        </button>
        <h2>
            Dashboard
        </h2>
        <div>
            <img 
                src='https://plus.unsplash.com/premium_photo-1675080431524-3e7c85323972?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFuJTIwZmFjZXxlbnwwfHwwfHx8MA%3D%3D'
                className='rounded-full object-cover '
                height="30vh"
                width="30vw"
            />
        </div>
    </div>
  )
}

export default Header