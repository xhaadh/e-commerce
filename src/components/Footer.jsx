import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaWordpress } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700">
        <div className="border-t border-gray-200 mt-20" />
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-8 sm:grid-cols-2 md:grid-cols-5">
        {/* Logo */}
        <div>
          <h3 className="text-2xl font-bold">
            <span className="text-orange-600">your logo</span>
          </h3>
        </div>

        {/* Learn More */}
        <div>
          <h4 className="font-semibold mb-4">Learn More</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-900">About</a></li>
            <li><a href="#" className="hover:text-gray-900">Releases</a></li>
            <li><a href="#" className="hover:text-gray-900">Environment</a></li>
            <li><a href="#" className="hover:text-gray-900">Jobs</a></li>
            <li><a href="#" className="hover:text-gray-900">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-gray-900">Contact Us</a></li>
          </ul>
        </div>

        {/* Our Community */}
        <div>
          <h4 className="font-semibold mb-4">Our Community</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-900">Any Community</a></li>
            <li><a href="#" className="hover:text-gray-900">Community name</a></li>
            <li><a href="#" className="hover:text-gray-900">Any Name</a></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h4 className="font-semibold mb-4">Contact Us</h4>
          <p className="mb-2">
            <span className="font-medium">Admin Officer:</span>{' '}
            <a href="tel:123-456-7890" className="text-blue-600 hover:underline">
              123-456-7890
            </a>
          </p>
          <p>
            <span className="font-medium">Email Officer:</span>{' '}
            <a href="mailto:hilink@byshaadh.com" className="text-blue-600 hover:underline">
              hotmart@byshaadh.com
            </a>
          </p>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-semibold mb-4">Social</h4>
          <div className="flex space-x-4 text-2xl">
            <a href="#" className="hover:text-gray-900"><FaFacebookF /></a>
            <a href="#" className="hover:text-gray-900"><FaInstagram /></a>
            <a href="#" className="hover:text-gray-900"><FaTwitter /></a>
            <a href="#" className="hover:text-gray-900"><FaYoutube /></a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200" />

      {/* Copyright */}
      <div className="max-w-7xl mx-auto px-6 py-20 text-center text-sm text-gray-500">
        © 2024 Hotmart By CodeWithShaadh | All rights reserved
      </div>
    </footer>
  )
}

export default Footer
