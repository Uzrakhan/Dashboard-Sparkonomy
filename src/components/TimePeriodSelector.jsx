import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // This line is crucial for styling

const TimePeriodSelector = () => {
  const [activePeriod, setActivePeriod] = useState('3Months');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const periods = [
    { label: '1Month', value: '1Month' },
    { label: '3Months', value: '3Months' },
    { label: '1Year', value: '1Year' },
  ];

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    if (start && end) {
      setActivePeriod('Custom');
    }
  };

  const getButtonClass = (value) => {
    const baseClasses = "mx-1 rounded-full text-xs font-normal transition-colors duration-200 px-1 mb-2";
    if (activePeriod === value) {
      // Styling for active button as seen in the screenshot
      return `${baseClasses} bg-purple-200 text-purple-700 border-2`;
    }
    // Styling for inactive buttons as seen in the screenshot
    return `${baseClasses} border-2 text-gray-700 hover:bg-gray-300`;
  };

  const formatDateRange = () => {
    if (startDate && endDate) {
      const start = startDate.toLocaleDateString('en-GB');
      const end = endDate.toLocaleDateString('en-GB');
      return `${start} - ${end}`;
    }
    return 'dd/mm/yyyy - dd/mm/yyyy';
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm p-2 relative border-2">
      <div className="flex justify-between items-center mb-2">
        <p className="font-semibold text-xs text-gray-500">Time Period</p>
        <p className="text-xs text-gray-500">{formatDateRange()}</p>
      </div>

      <div className="flex flex-wrap text-xs mb-1">
        {periods.map((period) => (
          <button
            key={period.value}
            onClick={() => setActivePeriod(period.value)}
            className={getButtonClass(period.value) }
          >
            {/* Conditional rendering for the crown icon */}
            {period.value === '1Year' && (
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="currentColor" 
                    className="w-4 h-4 mr-1">
                        <path 
                            fillRule="evenodd" 
                            d="M8.25 2.25a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75v.75a.75.75 0 01-.75.75h-4.5a.75.75 0 01-.75-.75V2.25zm-2.25 4a.75.75 0 01.75-.75h9a.75.75 0 01.75.75v.75a.75.75 0 01-.75.75h-9a.75.75 0 01-.75-.75V6.25zM12 18.25a.75.75 0 01.75-.75h.5a.75.75 0 01.75.75v.75a.75.75 0 01-.75.75h-.5a.75.75 0 01-.75-.75v-.75zm-3 0a.75.75 0 01.75-.75h.5a.75.75 0 01.75.75v.75a.75.75 0 01-.75.75h-.5a.75.75 0 01-.75-.75v-.75zm6 0a.75.75 0 01.75-.75h.5a.75.75 0 01.75.75v.75a.75.75 0 01-.75.75h-.5a.75.75 0 01-.75-.75v-.75zM3 10.75a.75.75 0 01.75-.75h16.5a.75.75 0 01.75.75v7.5a.75.75 0 01-.75.75H3.75a.75.75 0 01-.75-.75v-7.5z"
                            clipRule="evenodd" 
                        />
                </svg>
            )}
            {period.label}
          </button>
        ))}
        </div>

        <div>
            {/* This is the Custom button with the DatePicker.
            It's now a single component that opens the calendar on click. */}
            <DatePicker
                selected={startDate}
                onChange={handleDateChange}
                startDate={startDate}
                endDate={endDate}
                selectsRange
            // The button below acts as the input field for the date picker
            customInput={
                <button
                    onClick={() => setActivePeriod('Custom')}
                    className={getButtonClass('Custom') + ' flex items-center'}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4 mr-1"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A.75.75 0 0 1 3.75 10.5h16.5a.75.75 0 0 1 .75.75v7.5" />
                    </svg>
                        Custom
                </button>
            }
            />
        </div>
    </div>
  );
};

export default TimePeriodSelector;