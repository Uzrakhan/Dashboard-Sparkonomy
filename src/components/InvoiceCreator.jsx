import GradientPlus from './GradientPlus'

const InvoiceCreator = () => {

    return (
        <>
        <div className='bg-gray-100 rounded-3xl relative z-5 p-4 lg:p-12 lg:mt-10'>
            <div className='rounded-2xl shadow-sm'>
                <div className='flex flex-col items-center text-center'>
                    <div className='w-12 h-12 lg:w-16 lg:h-16 rounded-full p-[2px] flex items-center justify-center mb-4 border-4 border-purple-600'>
                        <GradientPlus className="w-10 h-10 lg:w-18 lg:h-18"/>
                    </div>
                </div>

                <div className='flex justify-center items-center flex-col'>
                    <h2 className='text-l lg:text-2xl font-bold bg-gradient-to-b from-pink-500 to-purple-800 bg-clip-text text-transparent mb-2'>
                        Create New Invoice
                    </h2>
                    <p className='text-gray-500 text-xs mb-4 lg:text-lg'>
                        Start by creating and sending new invoice
                    </p>
                </div>
            </div>
        </div>
        <p className='text-[#8134AF] text-xs text-center font-normal mt-5 lg:mt-5 lg:text-lg'>
                Or Upload an existing invoice and set payment reminder
        </p>
        </>
    )
}

export default InvoiceCreator