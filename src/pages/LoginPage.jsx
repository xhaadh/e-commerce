// src/components/LoginPage.jsx
import React, { useEffect, useState } from "react";
import { FaApple, FaGoogle } from "react-icons/fa";
import { FiUser, FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import heroImg from "../assets/person2.webp";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      navigate('/dashboard', { replace: true });
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const formData = new URLSearchParams();
    formData.append("username", username);
    formData.append("password", password);

    try {
      const response = await fetch(
        "https://primemlmsoftware.in/commondemo/member/Auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: formData.toString(),
        }
      );
      const data = await response.json();

      if (data?.token) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        navigate("/dashboard", { replace: true });
      } else {
        setError(data?.message || "Invalid credentials, please try again.");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("Network error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Form Column */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-white py-12 px-6 lg:px-16">
        <div className="w-full max-w-md space-y-8">
          {/* Header */}
          <h1 className="text-3xl font-bold text-gray-800">Sign In</h1>

          {/* Social Buttons */}
          <div className="flex gap-4">
            {[FaApple, FaGoogle].map((Icon, i) => (
              <button
                key={i}
                type="button"
                className="flex-1 flex items-center justify-center border border-gray-300 rounded-lg py-2 transition-shadow hover:shadow"
              >
                <Icon size={20} className="text-gray-600" />
              </button>
            ))}
          </div>

          {/* Divider */}
          <div className="relative text-center text-gray-500 text-sm">
            <div className="absolute inset-x-0 top-1/2 border-t border-gray-300" />
            <span className="relative bg-white px-3">Or</span>
          </div>

          {/* Error Message */}
          {error && (
            <div className="text-red-600 text-sm text-center">
              {error}
            </div>
          )}

          {/* Form */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Username */}
            <div className="relative">
              <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                required
                className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-3 focus:ring-2 focus:ring-orange-500 outline-none transition"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Your password"
                required
                className="w-full border border-gray-300 rounded-lg pl-10 pr-10 py-3 focus:ring-2 focus:ring-orange-500 outline-none transition"
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>

            {/* Terms */}
            <label className="flex items-start space-x-3 text-sm text-gray-600">
              <input
                type="checkbox"
                className="mt-1 h-4 w-4 text-orange-600 border-gray-300 rounded"
                required
              />
              <span>
                By clicking here, I agree to Hotmart's{" "}
                <a href="#" className="text-orange-600 underline">
                  Terms of Use
                </a>
                ,{" "}
                <a href="#" className="text-orange-600 underline">
                  Privacy Policy
                </a>
                , and confirm legal age.
              </span>
            </label>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full text-center bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg font-semibold transition duration-300
                ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>
        </div>
      </div>

      {/* Image Column */}
      <div className="hidden lg:block lg:w-1/2">
        <img
          src={heroImg}
          alt="Login hero"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default LoginPage;
