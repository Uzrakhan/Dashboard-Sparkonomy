import React, { useState } from 'react'

const InvoiceCard = ({ clientName, amount, date, initialStatus }) => {
  const [status, setStatus] = useState(initialStatus);

  let badgeColorClass;
  let textColorClass;

  switch (status) {
    case 'Paid':
      badgeColorClass = 'bg-green-100';
      textColorClass = 'text-green-600';
      break;
    case 'Update Status':
      badgeColorClass = 'bg-[#8134af]';
      textColorClass = 'text-white';
      break;
    case 'Overdue':
      badgeColorClass = 'bg-red-100';
      textColorClass = 'text-red-600';
      break;
    case 'Disputed': 
      badgeColorClass = 'bg-pink-100';
      textColorClass = 'text-pink-600';
      break;
    case 'Partially Paid':
      badgeColorClass = 'bg-yellow-100';
      textColorClass = 'text-yellow-600';
      break;
    case 'Draft':
      badgeColorClass = 'bg-gray-100';
      textColorClass = 'text-gray-600';
      break;
    case 'Unpaid':
    default:
      badgeColorClass = 'bg-gray-100';
      textColorClass = 'text-gray-600';
      break;
  }

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const statusOptions = [
    'Update Status',
    'Unpaid',
    'Paid',
    'Overdue',
    'Disputed',
    'Partially Paid',
    'Draft'
  ]

  return (
    <div className='bg-white rounded-xl shadow-sm px-2 lg:p-6 flex justify-between items-center m-0.5 border-2'>
      <div className='flex flex-col border-[#f2f2f2] p-0.5 py-2 border-1'>
        <h4 className='text-[#6b7280] font-semibold text-xs lg:text-lg'>
          {clientName}
        </h4>
        <p className='text-[#999999] text-xs mt-1 lg:text-base'>
          {amount}, Due: {date}
        </p>
      </div>

      <div className={`rounded-full px-1 py-1 text-xs font-semibold ${badgeColorClass} ${textColorClass}`}>
        <select 
          value={status}
          onChange={handleStatusChange}
          className={`bg-transparent outline-none border-none cursor-pointer ${textColorClass}`}
        >
          {statusOptions.map((option) => (
            <option key={option} value={option} className='text-xs'>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default InvoiceCard