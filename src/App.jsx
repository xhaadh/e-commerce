// src/App.jsx
import React from "react";
import { HashRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import PublicLayout from "./layouts/PublicLayout";
import ProtectedRoute from './components/ProtectedRoute';


const App = () => {
  return (
    <>
      <HashRouter>
        <Routes>
          {/* Public Routes */}
          <Route element={<PublicLayout />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="/login" element={<LoginPage />} />
          {/* Only access when user is logged in */}
           <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        </Routes>
      </HashRouter>
    </>
  );
};

export default App;
