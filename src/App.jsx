import './App.css'
import Header from './components/Header'
import InvoiceCreator from './components/InvoiceCreator'
import TimePeriodSelector from './components/TimePeriodSelector'
import TotalEarnings from './components/TotalEarnings'
import MetricCard from './components/MetricCard'
import IncomeChart from './components/IncomeChart'
import InvoiceCard from './components/InvoiceCard'
import Footer from './components/Footer'

function App() {

  return (
    <div className='bg-white min-h-screen'>
      <Header />
      
      {/* Main content area with a two-column layout for laptops */}
      <div className="flex flex-col flex-grow  lg:grid lg:grid-cols-2 lg:gap-6 mt-6 lg:mt-10">
        {/* First Column (Left): Large Invoice Creator */}
        <div className="px-4 lg:col-span-1 lg:px-4 rounded-t-4xl">
          <InvoiceCreator />
        </div>

        {/* Second Column (Right): All other smaller cards stacked vertically */}
        <div className="lg:col-span-1 flex flex-col space-y-4 px-4 mt-4 lg:mt-0 lg:px-4">
          <TimePeriodSelector />
          <TotalEarnings />
          <div className="flex space-x-4">
            <MetricCard title="Payment Awaited" value="$25,000" />
            <MetricCard title="Payment Overdue" value="$25,000" />
          </div>
        </div>

        {/* Chart and Invoices list, spanning the full width below the two columns */}
        <div className="lg:col-span-2 flex flex-col space-y-4 mt-4 px-4 lg:px-4">
          <IncomeChart />
          <div className='bg-white rounded-2xl shadow-sm p-2'>
            <h2 className='text-lg font-semibold text-[#999999] mb-4'>Your Invoices</h2>
            <div className="flex flex-col space-y-4">
              <InvoiceCard clientName="Uzra Khan" amount="₹1,25,000" date="2024-06-15" initialStatus="Update Status" />
              <InvoiceCard clientName="Aaisha Khan" amount="₹1,25,000" date="2024-06-15" initialStatus="Unpaid" />
              <InvoiceCard clientName="Income Trend" amount="₹1,25,000" date="2024-06-15" initialStatus="Disputed" />
              <InvoiceCard clientName="Income Trend" amount="₹1,25,000" date="2024-06-15" initialStatus="Paid" />
              <InvoiceCard clientName="Income Trend" amount="₹1,25,000" date="2024-06-15" initialStatus="Paid" />
              <InvoiceCard clientName="Income Trend" amount="₹1,25,000" date="2024-06-15" initialStatus="Partially Paid" />
              <InvoiceCard clientName="Income Trend" amount="₹1,25,000" date="2024-06-15" initialStatus="Paid" />
              <InvoiceCard clientName="Income Trend" amount="₹1,25,000" date="2024-06-15" initialStatus="Overdue" />
              <InvoiceCard clientName="Income Trend" amount="₹1,25,000" date="2024-06-15" initialStatus="Awaited" />
              <InvoiceCard clientName="Income Trend" amount="₹1,25,000" date="2024-06-15" initialStatus="Draft" />
              <InvoiceCard clientName="Income Trend" amount="₹1,25,000" date="2024-06-15" initialStatus="Paid" />
            </div>
          </div>
        </div>
      </div>
    <Footer />
  </div>
  )
}

export default App
