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
    'Unpaid',
    'Paid',
    'Overdue',
    'Disputed',
    'Partially Paid',
    'Draft'
  ]

  return (
    <div className='bg-white rounded-2xl shadow-sm p-4 flex justify-between items-center m-4 border-2'>
      <div>
        <h4 className='text-gray-800 font-semibold'>
          {clientName}
        </h4>
        <p className='text-gray-500 text-sm mt-1'>
          {amount}, Due: {date}
        </p>
      </div>

      <div className={`rounded-full px-4 py-1 text-xs font-semibold ${badgeColorClass} ${textColorClass}`}>
        <select 
          value={status}
          onChange={handleStatusChange}
          className={`bg-transparent outline-none border-none cursor-pointer ${textColorClass}`}
        >
          {statusOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default InvoiceCard