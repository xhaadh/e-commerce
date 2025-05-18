import React from 'react'

const ProductContent = () => {
  return (
   <div className="bg-white rounded-lg shadow p-6">
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-xl font-semibold text-gray-800">Products</h2>
      <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 transition-colors">
        Add Product
      </button>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <div key={item} className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
          <div className="h-48 bg-gray-100 flex items-center justify-center">
            <span className="text-gray-400">Product Image {item}</span>
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-lg text-gray-800">Product {item}</h3>
            <p className="text-gray-600 mt-1">Category {item}</p>
            <div className="flex justify-between items-center mt-4">
              <span className="font-bold text-gray-800">${(item * 25).toFixed(2)}</span>
              <button className="text-indigo-600 hover:text-indigo-800">View Details</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default ProductContent
