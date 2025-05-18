// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import PublicLayout from "./layouts/PublicLayout";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route element={<PublicLayout />}>
            <Route index element={<Home />} />
            <Route path="/" element={<Home />} />
          </Route>
          <Route path="/login" element={<LoginPage />} />
          {/* Only access when user is logged in */}
          <Route
            path="/dashboard"
            element={
              localStorage.getItem("token") ? (
                <Dashboard />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
