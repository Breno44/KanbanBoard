import React from "react";
import { FaMagento, FaTimes, FaSearch, FaBell } from "react-icons/fa";
import "./App.scss";

const App = () => {
  return (
    <div className="h-screen flex">
      <div className="w-64 px-8 py-4 bg-gray-100 border-r">
        <FaMagento className="h-9 w-9" />
        <nav className="mt-8">
          <h2 className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Issues</h2>
          <div className="mt-2">
            <a href="https://" className="flex justify-between items-center px-3 py-2 bg-gray-200 rounded-lg">
              <span className="text-sm font-medium text-gray-900">All</span>
              <span className="text-xs font-semibold text-gray-700">36</span>
            </a>
            <a href="https://" className="flex justify-between items-center px-3 py-2 rounded-lg">
              <span className="text-sm font-medium text-gray-700">Assigned to me</span>
              <span className="text-xs font-semibold text-gray-700">6</span>
            </a>
            <a href="https://" className="flex justify-between items-center px-3 py-2 rounded-lg">
              <span className="text-sm font-medium text-gray-700">Created by me</span>
              <span className="text-xs font-semibold text-gray-700">3</span>
            </a>
            <a href="https://" className="flex justify-between items-center px-3 py-2 rounded-lg">
              <span className="text-sm font-medium text-gray-700">Archived</span>
            </a>
          </div>
          <h2 className="mt-8 text-xs font-semibold text-gray-600 uppercase tracking-wider">Tags</h2>
          <div className="mt-2 mx-3">
            <a href="https://" className="flex justify-between items-center px-3 py-2 rounded-lg">
              <span className="text-sm font-medium text-gray-700">Bug</span>
            </a>
            <a href="https://" className="flex justify-between items-center px-3 py-2 rounded-lg">
              <span className="text-sm font-medium text-gray-700">Feature Request</span>
            </a>
            <a href="https://" className="flex justify-between items-center px-3 py-2 rounded-lg">
              <span className="text-sm font-medium text-gray-700">Marketing</span>
            </a>
            <a href="https://" className="flex justify-between items-center px-3 py-2 rounded-lg">
              <span className="text-sm font-medium text-gray-700">v2.0</span>
            </a>
            <a href="https://" className="flex justify-between items-center px-3 py-2 rounded-lg">
              <span className="text-sm font-medium text-gray-700">Enhancement</span>
            </a>
            <a href="https://" className="flex justify-between items-center px-3 py-2 rounded-lg">
              <span className="text-sm font-medium text-gray-700">Design</span>
            </a>
          </div>
          <button className="pl-5 mt-2 flex items-center text-sm font-medium text-gray-700">
            <FaTimes className="rotate-icon mr-2" />
            New Project
          </button>
        </nav>
      </div>
      <div className="flex-1 min-w-0 bg-white">
        <div className="border-b-2 border-gray-200">
          <header className="px-6">
            <div className="flex justify-between items-center py-3 border-b border-gray-200">
              <div className="flex-1">
                <div className="relative w-64">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                    <FaSearch className="text-gray-600" />
                  </span>
                  <input
                    className="block w-full rounded-md border border-gray-400 pl-12 pr-4 py-2 text-sm text-gray-900 placeholder-gray-600"
                    placeholder="Search"
                  />
                </div>
              </div>
              <div className="flex items-center">
                <button>
                  <FaBell className="text-gray-500 h-5 w-5" />
                </button>
                <button className="ml-6">
                  <img className="rounded-full" src="https://i.pravatar.cc/36" alt="user" />
                </button>
              </div>
            </div>
            <div></div>
          </header>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default App;
