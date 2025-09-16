import React, { useState } from 'react';
import { Bell, Edit, X } from 'lucide-react';

const InvoiceCard = ({ clientName, amount, date, initialStatus }) => {
  const [status, setStatus] = useState(initialStatus);
  const [showNotificationModal, setShowNotificationModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [editData, setEditData] = useState({
    clientName,
    amount,
    date,
    status: initialStatus
  })


  let badgeColorClass;
  let textColorClass;

  const statusOptions = [
    'Unpaid',
    'Update Status',
    'Awaited',
    'Paid',
    'Overdue',
    'Disputed',
    'Partially Paid',
    'Draft'
  ]

  switch (status) {
    case 'Paid':
      badgeColorClass = 'bg-green-100';
      textColorClass = 'text-green-600';
      break;
    case 'Awaited': 
      badgeColorClass = 'bg-[#fffae5]';
      textColorClass = 'text-[#ffcc00]';
      break;
    case 'Update Status':
      badgeColorClass = 'bg-[#8134af]';
      textColorClass = 'text-white';
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
      badgeColorClass = 'bg-[#fffae5]';
      textColorClass = 'text-[#ffcc00]';
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

  const handleEditSave = () => {
    setStatus(editData.status);
    setShowEditModal(false);
  }

  return (
    <>
      <div 
        className='bg-white rounded-xl shadow-sm px-2 lg:p-4 flex justify-between items-center m-0.5 border-2'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className='flex flex-col border-[#f2f2f2] p-0.5 py-2 border-1'>
          <h4 className='text-[#6b7280] font-semibold text-xs lg:text-lg'>
            {clientName}
          </h4>
          <p className='text-[#999999] text-xs mt-1 lg:text-base'>
            {amount}, Due: {date}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <div className={`rounded-full px-1 py-1 text-xs lg:text-sm font-semibold ${badgeColorClass} ${textColorClass}`}>
            <select 
              value={status}
              onChange={handleStatusChange}
              className={`bg-transparent outline-none border-none cursor-pointer ${textColorClass}`}
            >
              {statusOptions.map((option) => (
                <option key={option} value={option} className='text-xs'>
                  {option}
                </option>
              ))}
            </select>
          </div>
          
          {/* Always show on mobile (lg:hidden), show on hover for desktop (hidden lg:block) */}
          {(status === 'Overdue' || status === 'Awaited' || status === 'Draft') && (
            <div className="flex items-center gap-1 lg:hidden">
              <button
                onClick={() => setShowNotificationModal(true)}
                className="p-1 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-full transition-colors"
              >
                <Bell size={16} />
              </button>
      
              <button
                onClick={() => setShowEditModal(true)}
                className="p-1 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-full transition-colors"
              >
                <Edit size={16} />
              </button>
            </div>
          )}
          
          {isHovered && (status === 'Overdue' || status === 'Awaited' || status === 'Draft') && (
            <div className='hidden lg:flex items-center gap-1'>
              {/* Bell Icon */}
              <button
                onClick={() => setShowNotificationModal(true)}
                className="p-1 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
              >
                <Bell size={16} />
              </button>

              {/* Pen Icon */}
              <button
                onClick={() => setShowEditModal(true)}
                className="p-1 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
              >
                <Edit size={16} />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Notification Modal */}
      {showNotificationModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Set Reminder</h3>
              <button onClick={() => setShowNotificationModal(false)}>
                <X size={20} className="text-gray-500" />
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Reminder Options</label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">1 day before due date</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">On due date</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">Weekly reminders</span>
                  </label>
                </div>
              </div>
              
              <button
                onClick={() => setShowNotificationModal(false)}
                className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors"
              >
                Save Reminders
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {showEditModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Edit Invoice</h3>
              <button onClick={() => setShowEditModal(false)}>
                <X size={20} className="text-gray-500" />
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Client Name</label>
                <input
                  type="text"
                  value={editData.clientName}
                  onChange={(e) => setEditData({...editData, clientName: e.target.value})}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Amount</label>
                <input
                  type="text"
                  value={editData.amount}
                  onChange={(e) => setEditData({...editData, amount: e.target.value})}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Due Date</label>
                <input
                  type="date"
                  value={editData.date}
                  onChange={(e) => setEditData({...editData, date: e.target.value})}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Status</label>
                <select 
                  value={editData.status}
                  onChange={(e) => setEditData({...editData, status: e.target.value})}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                >
                  {statusOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              
              <button
                onClick={handleEditSave}
                className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default InvoiceCard