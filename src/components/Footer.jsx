import React from 'react'

const Footer = () => {
  return (
    <div className='bg-white p-10 border-t border-gray-200 flex justify-center items-center flex-col mt-6'>
        <div className='flex items-center space-x-2'>
            <p className='text-xl font-semibold text-gray-800'>
                Sparknomy
            </p>
            <p className="text-xl text-purple-600">
                🐾
            </p>
        </div>
        {/* Slogan */}
        <p className="text-sm text-gray-500 mt-1">
            sparking the creator economy
        </p>
    </div>
  )
}

export default Footer