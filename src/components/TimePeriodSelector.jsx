import React from 'react'

const TimePeriodSelector = () => {
  return (
    <div className='bg-white rounded-2xl shadow-sm flex justify-between'>
        <div>
            <h4 className='border-2'>
                Time Period
            </h4>
            <div>
                <span className='border-2'>
                1 Month
                </span>
                <span className='border-2'>
                    3 Months
                </span>
                <span className='border-2'>
                    1 Year
                </span>
            </div>
            <span className='border-2'>
                Custom
            </span>
        </div>
        <div className='border-2'>
            date picker
        </div>
    </div>
  )
}

export default TimePeriodSelector