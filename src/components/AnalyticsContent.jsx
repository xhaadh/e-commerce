import React from 'react'

const AnalyticsContent = () => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
    <h2 className="text-xl font-semibold text-gray-800 mb-6">Analytics Dashboard</h2>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-gray-200 p-4 rounded-lg">
        <h3 className="text-lg font-medium text-gray-800 mb-4">Traffic Sources</h3>
        <div className="h-64 flex items-center justify-center">
          <p className="text-gray-500">Pie Chart Placeholder</p>
        </div>
      </div>
      <div className="bg-gray-200 p-4 rounded-lg">
        <h3 className="text-lg font-medium text-gray-800 mb-4">User Acquisition</h3>
        <div className="h-64 flex items-center justify-center">
          <p className="text-gray-500">Line Chart Placeholder</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default AnalyticsContent
