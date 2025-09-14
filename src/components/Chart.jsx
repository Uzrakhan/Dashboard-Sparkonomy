import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Line
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
    <div className="bg-white rounded-2xl shadow-sm p-4">
      {/* Title and description for the chart */}
      <h3 className="text-lg font-semibold text-gray-800">Income Trend</h3>
      <p className="text-sm text-gray-500 mb-4">Your monthly income and growth for the last 6 months.</p>
      
      <div className="w-full h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e0e0e0" /> {/* Hide vertical grid, lighten horizontal */}
            
            {/* X-Axis for Months */}
            <XAxis dataKey="name" axisLine={false} tickLine={false} style={{ fontSize: '0.9rem', fill: '#4a5568', fontWeight: 'bold' }} />
            
            {/* Left Y-Axis for Income */}
            <YAxis 
              yAxisId="left" 
              orientation="left" 
              stroke="#8884d8" // Purple for consistency
              domain={[0, 8000]} // From $0k to $8k
              tickCount={5} // To get 0, 2k, 4k, 6k, 8k
              tickFormatter={(value) => `$${value / 1000}k`} // Formats to $0k, $2k etc.
              axisLine={false} // Remove the y-axis line
              tickLine={false} // Remove the y-axis ticks
              style={{ fontSize: '0.8rem', fill: '#4a5568' }} // Adjust font size/color
            />
            
            {/* Right Y-Axis for MoM Growth */}
            <YAxis 
              yAxisId="right" 
              orientation="right" 
              stroke="#82ca9d" // Green for consistency (we'll override Line color below)
              domain={[-100, 100]} // From -100% to 100%
              tickCount={5} // To get -100%, -50%, 0%, 50%, 100%
              tickFormatter={(value) => `${value}%`} // Formats to -100%, -50% etc.
              axisLine={false} // Remove the y-axis line
              tickLine={false} // Remove the y-axis ticks
              style={{ fontSize: '0.8rem', fill: '#4a5568' }} // Adjust font size/color
            />
            
            <Tooltip cursor={{ fill: 'rgba(0,0,0,0.05)' }} /> {/* Light grey background for tooltip cursor */}
            
            {/* Bar for Income - set to the purple color */}
            <Bar yAxisId="left" dataKey="income" fill="#a78bfa" barSize={30} radius={[5, 5, 0, 0]} /> {/* Tailwind's purple-400 or a similar shade, rounded tops */}
            
            {/* Line for MoM Growth - set to the maroon color */}
            <Line 
              yAxisId="right" 
              dataKey="momGrowth" 
              stroke="#8b0000" // Dark maroon/brown color from screenshot
              strokeWidth={2}
              type="monotone" // Smooth curve
              dot={false} // No dots on the line
            />
          </BarChart>
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