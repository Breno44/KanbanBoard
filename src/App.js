import React from "react";
import { FaMagento, FaTimes } from "react-icons/fa";
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
        <div className="border-b-2 border-gray-200"></div>
        <div></div>
      </div>
    </div>
  );
};

export default App;
