import React from 'react'

const MetricCard = ({ title, value }) => {
  return (
    <div className='bg-white rounded-2xl shadow-sm w-full border-2 p-2'>
        <h3 className='text-gray-500 text-sm'>
            {title}
        </h3>
        <h4 className='text-2xl font-bold mt-1 text-purple-600'>
            {value}
        </h4>
    </div>
  )
}

export default MetricCard