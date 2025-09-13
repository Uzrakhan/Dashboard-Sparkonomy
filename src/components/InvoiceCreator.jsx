import React from 'react'

const InvoiceCreator = () => {
  return (
    <div className='bg-white rounded-2xl shadow-sm flex flex-col justify-center items-center'>
        <div className='bg-gray-100'>
            <h1>
                Create New Invoice
            </h1>
            <p>
                Start by creating and sending new invoice
            </p>
        </div>
        <p>
            Or Upload an existing invoice and set payment reminder
        </p>
    </div>
  )
}

export default InvoiceCreator