import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';

//dummy data to replicate the chart in the screenshot
const data = [
  { name: "Jan", income: 3500, momGrowth: 40 },
  { name: 'Feb', income: 5000, momGrowth: 50 },
  { name: 'Mar', income: 7000, momGrowth: 60 },
  { name: 'Apr', income: 3000, momGrowth: 35 },
  { name: 'May', income: 6000, momGrowth: 65 },
  { name: 'Jun', income: 5000, momGrowth: 50 },
]

const Chart = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-4 border-2">
      <h3 className='text-lg font-semibold text-gray-800'>
        Income Trend
      </h3>
      <p className='text-sm text-gray-500 mb-4'>
        Your monthly income and growth for the last 6 months.
      </p>
      
      <div className='w-full h-80'>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3"/>
            <XAxis dataKey="name"/>
            <YAxis yAxisId="left" orientation='left' stroke='#8884d8' />
            <YAxis yAxisId="right" orientation='right' stroke='#82ca9d'/>
            <Tooltip />
            <Legend />
            <Bar yAxisId="left" dataKey="income" fill='#8884d8' />
            <Line yAxisId="right" dataKey="momGrowth" stroke='#82ca9d' />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default Chart