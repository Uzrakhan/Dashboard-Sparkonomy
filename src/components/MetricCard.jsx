import React from 'react'

const MetricCard = ({ title, value }) => {
  return (
    <div className='bg-white rounded-2xl shadow-sm border-2 p-3 lg:py-5 flex flex-1 flex-col justify-between'>
        <h3 className='text-gray-500 text-sm font-semibold lg:text-lg'>
            {title}
        </h3>
        <h4 className='text-xl font-bold mt-1 text-[#8134AF] lg:text-2xl'>
            {value}
        </h4>
    </div>
  )
}

export default MetricCard