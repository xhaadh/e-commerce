// src/components/Sidebar.jsx
import React, { useState, useEffect } from "react";
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
  FiX,
} from "react-icons/fi";

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      // On desktop, show sidebar by default (collapsed)
      if (!mobile) {
        setSidebarOpen(true);
      } else {
        setSidebarOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const navItems = [
    { icon: <FiHome size={20} />, label: "Dashboard", id: "dashboard" },
    { icon: <FiUsers size={20} />, label: "Users", id: "users" },
    { icon: <FiShoppingCart size={20} />, label: "Products", id: "products" },
    { icon: <FiPieChart size={20} />, label: "Analytics", id: "analytics" },
    { icon: <FiMail size={20} />, label: "Messages", id: "messages" },
    { icon: <FiCalendar size={20} />, label: "Calendar", id: "calendar" },
    { icon: <FiSettings size={20} />, label: "Settings", id: "settings" },
  ];

   const shouldShowLabel = sidebarOpen || (isMobile && sidebarOpen);

  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      {/* Overlay for mobile */}
      {isMobile && sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar - Always visible on desktop, only when open on mobile */}
      <div
        className={`bg-orange-600 text-white transition-all duration-300 ease-in-out flex flex-col
        ${sidebarOpen ? "w-64" : isMobile ? "w-0" : "w-20"} 
        ${isMobile ? "fixed z-20 h-full" : "relative h-full"}`}
      >
        {/* Logo and Toggle - Only show toggle on desktop */}
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
              aria-label={sidebarOpen ? "Collapse sidebar" : "Expand sidebar"}
              aria-expanded={sidebarOpen}
            >
              {sidebarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          )}
        </div>

        {/* Navigation Items */}
<nav className="flex-1 overflow-y-auto py-2">
  {navItems.map((item) => {
   
    return (
      <button
        key={item.id}
        onClick={() => {
          setActiveTab(item.id);
          if (isMobile) setSidebarOpen(false);
        }}
        className={`flex items-center w-full px-4 py-3 transition-colors duration-200
          ${activeTab === item.id ? "bg-orange-700" : "hover:bg-orange-700"}
          ${shouldShowLabel ? "justify-start" : "justify-center"}`}
        aria-current={activeTab === item.id ? "page" : undefined}
      >
        <span className={`${shouldShowLabel ? "mr-3" : ""}`}>{item.icon}</span>
        {shouldShowLabel && <span className="whitespace-nowrap">{item.label}</span>}
      </button>
    );
  })}
</nav>


        {/* Logout Button */}
        <div className="p-4 border-orange-500">
          <button
    className={`flex items-center w-full px-3 py-2 hover:bg-orange-700 rounded-lg
      ${shouldShowLabel ? "justify-start" : "justify-center"}`}
  >
    <FiLogOut size={20} />
    {shouldShowLabel && (
      <span className="ml-3 whitespace-nowrap">Logout</span>
    )}
  </button>
        </div>
      </div>

      {/* Main Content */}
      <div
        className={`flex-1 transition-all duration-300 ease-in-out`}
      >
        <header className="bg-white shadow-sm p-4 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-700 capitalize flex justify-center items-center">
            {/* Mobile menu button - only shown on mobile */}
            {isMobile && (
              <button
                onClick={toggleSidebar}
                className="p-2 rounded-lg hover:bg-gray-100 focus:outline-none mr-2"
                aria-label={sidebarOpen ? "Close menu" : "Open menu"}
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
          {activeTab === "dashboard" && <DashboardContent />}
          {activeTab === "users" && <UsersContent />}
          {activeTab === "products" && <ProductsContent />}
          {activeTab === "analytics" && <AnalyticsContent />}
          {activeTab === "messages" && <MessagesContent />}
          {activeTab === "calendar" && <CalendarContent />}
          {activeTab === "settings" && <SettingsContent />}
        </main>
      </div>
    </div>
  );
};

export default Sidebar;