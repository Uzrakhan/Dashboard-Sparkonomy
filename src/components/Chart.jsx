import React from 'react';
import {
  ComposedChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Line, ReferenceLine
} from 'recharts';

// Adjusted dummy data to include negative momGrowth and match visual scale
const data = [
  { name: 'Jan', income: 3500, momGrowth: 40 },  // ~$3.5k, 40%
  { name: 'Feb', income: 4800, momGrowth: 55 },  // ~$4.8k, 55%
  { name: 'Mar', income: 6800, momGrowth: 50 },  // ~$6.8k, 50%
  { name: 'Apr', income: 3200, momGrowth: -50 }, // ~$3.2k, -50% (significant drop)
  { name: 'May', income: 5000, momGrowth: 60 },  // ~$5.0k, 60%
  { name: 'Jun', income: 200, momGrowth: -100 }, // ~$0.2k, -100% (sharp drop)
];

const IncomeChart = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-2 border-2 w-full lg:mt-5">
      {/* Title and description for the chart */}
      <h3 className="text-sm font-semibold text-[#6b7280] lg:text-2xl lg:mx-2">Income Trend</h3>
      <p className="text-sm font-normal text-[#6b7280] mb-4 lg:mx-2">Your monthly income and growth for the last 6 months.</p>
      
      <div className="flex justify-center h-64 lg:h-96">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={data} margin={{ top: 10, right: 15, left: 15, bottom: 15 }} >
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e0e0e0" /> {/* Hide vertical grid, lighten horizontal */}
            
            {/* X-Axis for Months */}
            <XAxis dataKey="name" axisLine={false} tickLine={false} interval={0} style={{ fontSize: '0.75rem' }}  />
            
            {/* Left Y-Axis for Income */}
            <YAxis 
              yAxisId="left" 
              orientation="left" 
              stroke="#877b9e" // Purple for consistency
              domain={[0, 8000]} // From $0k to $8k
              tickCount={5} // To get 0, 2k, 4k, 6k, 8k
              tickFormatter={(value) => `$${value / 1000}k`} // Formats to $0k, $2k etc.
              axisLine={{ stroke: '#a78bfa', strokeWidth: 2 }}
              tickLine={false} // Remove the y-axis ticks
              style={{ fontSize: '0.8rem', fill: '#877b9e' }} // Adjust font size/color
            />
            
            {/* Right Y-Axis for MoM Growth */}
            <YAxis 
              yAxisId="right" 
              orientation="right" 
              stroke="#82ca9d" // Green for consistency (we'll override Line color below)
              domain={[-100, 100]} // From -100% to 100%
              tickCount={5} // To get -100%, -50%, 0%, 50%, 100%
              tickFormatter={(value) => `${value}%`} // Formats to -100%, -50% etc.
              axisLine={false} 
              tickLine={false} 
              style={{ fontSize: '0.8rem', fill: '#877b9e' }} // Adjust font size/color
            />

            <ReferenceLine y={8000} yAxisId="left" stroke="#d1d5db" strokeDasharray="3 3" />
            <ReferenceLine y={6000} yAxisId="left" stroke="#d1d5db" strokeDasharray="3 3" /> 
            <ReferenceLine y={4000} yAxisId="left" stroke="#d1d5db" strokeDasharray="3 3" /> 
            <ReferenceLine y={2000} yAxisId="left" stroke="#d1d5db" strokeDasharray="3 3" /> 
            <ReferenceLine y={0}    yAxisId="left" stroke="#d1d5db" strokeDasharray="3 3" /> 

            
            <Tooltip cursor={{ fill: 'rgba(0,0,0,0.05)' }} /> {/* Light grey background for tooltip cursor */}
            
            {/* Bar for Income - set to the purple color */}
            <Bar yAxisId="left" dataKey="income" fill="#a743e5" maxBarSize={25} radius={[5, 5, 0, 0]} /> {/* Tailwind's purple-400 or a similar shade, rounded tops */}
            
            {/* Line for MoM Growth - set to the maroon color */}
            <Line 
              yAxisId="right" 
              dataKey="momGrowth" 
              stroke="#8b0000" // Dark maroon/brown color from screenshot
              strokeWidth={2}
              type="monotone" // Smooth curve
              dot={false} 
            />

            <YAxis 
              yAxisId="right" 
              orientation="right" 
              domain={[-100, 100]} 
              tickCount={5}
              tickFormatter={(value) => `${value}%`} 
              axisLine={{ stroke: '#8b0000', strokeWidth: 2 }}  // Red line
              tickLine={false}
              style={{ fontSize: '0.8rem', fill: '#4a5568' }} 
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      {/* Custom Legend (as seen in the screenshot) */}
      <div className="flex justify-center items-center mt-4 space-x-6 text-sm font-semibold">
        <div className="flex items-center">
          <span className="w-3 h-3 rounded-full bg-purple-400 mr-2"></span>
          <span>income</span>
        </div>
        <div className="flex items-center">
          <span className="w-3 h-0.5 bg-red-800 mr-2"></span> {/* A short line for momGrowth */}
          <span>momGrowth</span>
        </div>
      </div>
    </div>
  );
};

export default IncomeChart;