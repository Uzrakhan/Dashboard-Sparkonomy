import React from 'react'

const InvoiceCreator = () => {
  return (
    <div className='bg-white rounded-2xl shadow-sm flex flex-col items-center justify-center p-6'>
        <div className='bg-gray-100 flex flex-col items-center p-7 w-full rounded-2xl'>
            <div className='bg-purple-100 h-16 w-16 rounded-full flex items-center justify-center'>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8 text-purple-600"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
            </div>
            <h3 className='text-2xl font-bold text-purple-600 mt-4'>
                Create New Invoice
            </h3>
            <p className='text-sm text-gray-500 mt-1'>
                Start by creating and sending new invoice
            </p>
        </div>

        <p className='text-purple-500 font-semibold mt-4 text-center text-xs mb-4'>
            Or Upload an existing invoice and set payment reminder
        </p>
    </div>
  )
}

export default InvoiceCreator