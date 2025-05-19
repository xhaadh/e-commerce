// src/components/Dashboard
import React, { useState, useEffect, useContext } from 'react';
import { 
  FiHome, 
  FiUsers, 
  FiSettings, 
  FiPieChart, 
  FiShoppingCart, 
  FiCalendar,
  FiMail,
  FiLogOut,
  FiMenu,
  FiX
} from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const AdminPanel = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isMobile, setIsMobile] = useState(false);

  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) {
        setSidebarOpen(true);
      } else {
        setSidebarOpen(false);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleLogout = () => {
    logout();
    navigate('/login', { replace: true });
  };
  
  const navItems = [
    { icon: <FiHome size={20} />, label: 'Dashboard', id: 'dashboard' },
    { icon: <FiUsers size={20} />, label: 'Users', id: 'users' },
    { icon: <FiShoppingCart size={20} />, label: 'Products', id: 'products' },
    { icon: <FiPieChart size={20} />, label: 'Analytics', id: 'analytics' },
    { icon: <FiMail size={20} />, label: 'Messages', id: 'messages' },
    { icon: <FiCalendar size={20} />, label: 'Calendar', id: 'calendar' },
    { icon: <FiSettings size={20} />, label: 'Settings', id: 'settings' },
  ];
  const shouldShowLabel = sidebarOpen || (!isMobile && sidebarOpen);
  

  return (
    <div className="flex h-screen bg-gray-100 font-sans overflow-hidden">
      {/* Overlay on mobile */}
      {isMobile && sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <div
        className={`transition-all duration-300 ease-in-out text-white flex flex-col bg-orange-600 z-20
        ${isMobile ? 'fixed h-full' : 'h-full relative'}
        ${sidebarOpen ? (isMobile ? 'w-64' : 'w-64') : (isMobile ? 'w-0' : 'w-20')}`}
      >
        {/* Header */}
        <div className="p-4 flex items-center justify-between h-16 border-orange-500">
          {sidebarOpen ? (
            <h1 className="text-2xl font-bold whitespace-nowrap">yourlogo</h1>
          ) : (
            <div className="w-6" />
          )}
          {!isMobile && (
            <button
              onClick={toggleSidebar}
              className="p-2 rounded-lg hover:bg-orange-700 focus:outline-none"
              aria-label={sidebarOpen ? 'Collapse sidebar' : 'Expand sidebar'}
              aria-expanded={sidebarOpen}
            >
              {sidebarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                if (isMobile) setSidebarOpen(false);
              }}
              className={`flex items-center w-full px-4 py-3 transition-colors duration-200
                ${activeTab === item.id ? 'bg-orange-700' : 'hover:bg-orange-700'}
                ${shouldShowLabel ? 'justify-start' : 'justify-center'}`}
              aria-current={activeTab === item.id ? 'page' : undefined}
            >
              <span className={`${shouldShowLabel ? 'mr-3' : ''}`}>{item.icon}</span>
              {shouldShowLabel && <span className="whitespace-nowrap">{item.label}</span>}
            </button>
          ))}
        </nav>

        {/* Logout */}
        <div className="p-4 border-orange-500">
          <button
          onClick={handleLogout}
            className={`flex items-center w-full px-3 py-2 hover:bg-orange-700 rounded-lg
              ${shouldShowLabel ? 'justify-start' : 'justify-center'}`}
          >
            <FiLogOut size={20} />
            {shouldShowLabel && <span className="ml-3 whitespace-nowrap">Logout</span>}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <header className="bg-white shadow-sm p-4 flex justify-between items-center sticky top-0 z-10">
          <h2 className="text-xl font-semibold text-gray-700 capitalize flex items-center">
            {isMobile && (
              <button
                onClick={toggleSidebar}
                className="p-2 rounded-lg hover:bg-gray-100 focus:outline-none mr-2"
                aria-label={sidebarOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={sidebarOpen}
              >
                <FiMenu size={24} />
              </button>
            )}
            {activeTab}
          </h2>
          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Search..."
              />
            </div>
            <div className="relative">
              <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-orange-700 font-semibold">
                JD
              </div>
            </div>
          </div>
        </header>

        <main className="p-6">
          {activeTab === 'dashboard' && <DashboardContent />}
          {activeTab === 'users' && <UsersContent />}
          {activeTab === 'products' && <ProductsContent />}
          {activeTab === 'analytics' && <AnalyticsContent />}
          {activeTab === 'messages' && <MessagesContent />}
          {activeTab === 'calendar' && <CalendarContent />}
          {activeTab === 'settings' && <SettingsContent />}
        </main>
      </div>
    </div>
  );
};

const DashboardContent = () => {
  const stats = [
    { title: 'Total Users', value: '2,420', change: '+12%', trend: 'up' },
    { title: 'Total Revenue', value: '$18,230', change: '+8%', trend: 'up' },
    { title: 'Pending Orders', value: '84', change: '-2%', trend: 'down' },
    { title: 'Active Products', value: '156', change: '+5%', trend: 'up' },
  ];

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-6">
            <h3 className="text-gray-500 text-sm font-medium">{stat.title}</h3>
            <p className="text-2xl font-bold text-gray-800 mt-2">{stat.value}</p>
            <div className={`flex items-center mt-2 ${stat.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
              {stat.trend === 'up' ? (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              )}
              <span className="ml-1 text-sm">{stat.change}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow p-6 lg:col-span-2">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Revenue Overview</h3>
          <div className="h-64 bg-gray-200 rounded flex items-center justify-center">
            <p className="text-gray-500">Chart Placeholder</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="flex items-start">
                <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-orange-700 font-semibold mr-3">
                  U{item}
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-800">User {item} performed an action</p>
                  <p className="text-xs text-gray-500">2 hours ago</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-800">Latest Orders</h3>
          <button className="text-sm text-indigo-600 hover:text-indigo-800">View All</button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {[1, 2, 3, 4, 5].map((item) => (
                <tr key={item}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#ORD-{item}00{item}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Customer {item}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${item % 2 === 0 ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                      {item % 2 === 0 ? 'Completed' : 'Pending'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${(item * 125).toFixed(2)}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2023-05-{10 + item}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const UsersContent = () => (
  <div className="bg-white rounded-lg shadow p-6">
    <h2 className="text-xl font-semibold text-gray-800 mb-6">Users Management</h2>
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {[1, 2, 3, 4, 5].map((item) => (
            <tr key={item}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-orange-700 font-semibold mr-3">
                    U{item}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">User {item}</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">user{item}@example.com</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {item % 2 === 0 ? 'Admin' : 'User'}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  Active
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button className="text-indigo-600 hover:text-indigo-900 mr-3">Edit</button>
                <button className="text-red-600 hover:text-red-900">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const ProductsContent = () => (
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
);

const AnalyticsContent = () => (
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
);

const MessagesContent = () => (
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
);

const CalendarContent = () => (
  <div className="bg-white rounded-lg shadow p-6">
    <h2 className="text-xl font-semibold text-gray-800 mb-6">Calendar</h2>
    <div className="bg-gray-200 rounded-lg p-4 h-96 flex items-center justify-center">
      <p className="text-gray-500">Calendar View Placeholder</p>
    </div>
  </div>
);

const SettingsContent = () => (
  <div className="bg-white rounded-lg shadow p-6">
    <h2 className="text-xl font-semibold text-gray-800 mb-6">Settings</h2>
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-800 mb-3">Profile Settings</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              
            />
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-medium text-gray-800 mb-3">Change Password</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>
      </div>
      
      <div className="flex justify-end">
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 transition-colors">
          Save Changes
        </button>
      </div>
    </div>
  </div>
);

export default AdminPanel;