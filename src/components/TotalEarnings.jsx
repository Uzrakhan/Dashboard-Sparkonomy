import React from 'react';


const TotalEarnings = () => {
  return (
    <div className='bg-white rounded-2xl shadow-sm p-4 border-2 flex justify-between items-stretch lg:p-6'>
      <div className='flex justify-between items-center'>
        <p className='font-semibold text-gray-800 lg:text-lg'>
          Total Earnings
        </p>
      </div>
      <h2 className='text-purple-600 font-bold text-2xl lg:text-3xl'>
          $1,25,000
      </h2>
    </div>
  )
}

export default TotalEarnings