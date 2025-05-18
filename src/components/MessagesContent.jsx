import React from 'react'

const MessagesContent = () => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
    <h2 className="text-xl font-semibold text-gray-800 mb-6">Messages</h2>
    <div className="space-y-4">
      {[1, 2, 3, 4, 5].map((item) => (
        <div key={item} className={`p-4 rounded-lg ${item % 2 === 0 ? 'bg-indigo-50' : 'bg-white'} border border-gray-200`}>
          <div className="flex justify-between">
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-orange-700 font-semibold mr-3">
                S{item}
              </div>
              <div>
                <h4 className="font-medium text-gray-800">Sender {item}</h4>
                <p className="text-sm text-gray-500">sender{item}@example.com</p>
              </div>
            </div>
            <span className="text-sm text-gray-500">2 days ago</span>
          </div>
          <p className="mt-3 text-gray-700">
            This is a sample message content for message {item}. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          {item % 2 === 0 && (
            <button className="mt-3 text-indigo-600 hover:text-indigo-800 text-sm font-medium">
              Reply
            </button>
          )}
        </div>
      ))}
    </div>
  </div>
  )
}

export default MessagesContent
