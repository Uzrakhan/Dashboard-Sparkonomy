import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import InvoiceCreator from './components/InvoiceCreator'
import TimePeriodSelector from './components/TimePeriodSelector'
import TotalEarnings from './components/TotalEarnings'
import MetricCard from './components/MetricCard'
import Chart from './components/Chart'
import InvoiceCard from './components/InvoiceCard'

function App() {

  return (
    <div className='bg-white min-h-screen p-4'>
      <Header />
      <div className='mt-5 flex flex-col space-y-4'>
        <InvoiceCreator />
        <TimePeriodSelector />
        <TotalEarnings />
        <div className='flex space-y-4 items-center justify-between '>
          <MetricCard title="Payment Awaited" value="₹25,000"/>
          <MetricCard title="Payment Overdue" value="₹25,000"/>
        </div>
        <Chart />
        <div className='mt-6 flex flex-col justify-between items-stretch space-y-4'>
          <div>
            <h2 className='text-xl font-semibold'>Your Invoices</h2>
            <InvoiceCard clientName="Uzra Khan" amount="₹1,25,000"  date="2024-06-15" initialStatus="Unpaid" />
            <InvoiceCard clientName="Aaisha Khan" amount="₹1,25,000" date="2024-06-15" initialStatus="Disputed" />
            <InvoiceCard clientName="Haris Khan" amount="₹1,25,000" date="2024-06-15" initialStatus="Paid" />
            <InvoiceCard clientName="Nizam Khan" amount="₹1,25,000" date="2024-06-15" initialStatus="Partially Paid" />
            <InvoiceCard clientName="Ameera Khan" amount="₹1,25,000" date="2024-06-15" initialStatus="Overdue" />
            <InvoiceCard clientName="Affan Ahmed" amount="₹1,25,000" date="2024-06-15" initialStatus="Awaited" />
            <InvoiceCard clientName="Azhar Ahmed" amount="₹1,25,000" date="2024-06-15" initialStatus="Draft" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
