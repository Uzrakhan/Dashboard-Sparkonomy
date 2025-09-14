import React from 'react'

const MetricCard = ({ title, value }) => {
  return (
    <div className='bg-white rounded-2xl shadow-sm border-2 p-3 flex flex-col justify-start w-1/2 mx-2'>
        <h3 className='text-gray-500 text-sm font-semibold'>
            {title}
        </h3>
        <h4 className='text-xl font-bold mt-1 text-purple-600'>
            {value}
        </h4>
    </div>
  )
}

export default MetricCard