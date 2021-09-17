import React from "react";
import { FaMagento, FaTimes, FaSearch, FaBell } from "react-icons/fa";
import { BsBook, BsJustify } from "react-icons/bs";
import "./App.scss";

const App = () => {
  return (
    <div className="h-screen flex">
      <div className="w-64 px-8 py-4 bg-gray-100 border-r overflow-auto">
        <FaMagento className="h-9 w-9" />
        <nav className="mt-8">
          <h3 className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Issues</h3>
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
          <h3 className="mt-8 text-xs font-semibold text-gray-600 uppercase tracking-wider">Tags</h3>
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
      <div className="flex-1 min-w-0 flex flex-col bg-white">
        <div className="flex-shrink-0 border-b-2 border-gray-200">
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
            <div className="flex items-center justify-between py-2">
              <div className="flex items-center">
                <h2 className="text-2xl font-semibold text-gray-900 leading-tight">All Issues</h2>
                <div className="ml-6 flex items-center">
                  <span className="rounded-full border-2 border-white -ml-2">
                    <img className="rounded-full object-cover" src="https://i.pravatar.cc/24" alt="user" />
                  </span>
                  <span className="rounded-full border-2 border-white -ml-2">
                    <img className="rounded-full object-cover" src="https://i.pravatar.cc/24" alt="user" />
                  </span>
                  <span className="rounded-full border-2 border-white -ml-2">
                    <img className="rounded-full object-cover" src="https://i.pravatar.cc/24" alt="user" />
                  </span>
                  <span className="rounded-full border-2 border-white -ml-2">
                    <img className="rounded-full object-cover" src="https://i.pravatar.cc/24" alt="user" />
                  </span>
                </div>
              </div>
              <div className="flex">
                <span className="inline-flex p-1 border bg-gray-200 rounded-md">
                  <button className="px-2 py-1 rounded">
                    <BsJustify className="h-6 w-6 text-gray-600" />
                  </button>
                  <button className="px-2 py-1 bg-white rounded shadow">
                    <BsBook className="h-6 w-6 text-gray-600" />
                  </button>
                </span>
                <button className="ml-5 flex items-center pl-2 pr-4 text-sm font-medium text-white bg-gray-800 rounded-md hover:bg-gray-700">
                  <FaTimes className="rotate-icon mr-2" />
                  New Issue
                </button>
              </div>
            </div>
          </header>
        </div>
        <div className="flex-1 overflow-auto">
          <main className="p-3 inline-flex">
            <div className="ml-3 flex-shrink-0 p-3 w-80 bg-gray-100 rounded-md">
              <h3 className="text-sm font-medium text-gray-900">Backlog</h3>
              <ul className="mt-2">
                <li>
                  <a href="https://" className="block p-5 bg-white rounded-md shadow">
                    <div className="flex justify-between">
                      <p className="text-sm font-medium text-gray-900">Add discount code to checkout page</p>
                      <span>
                        <img className="rounded-full" src="https://i.pravatar.cc/36" alt="user" />
                      </span>
                    </div>
                    <div className="flex justify-between items-baseline">
                      <div className="text-sm text-gray-600">
                        <time datetime="2021-09-16">Sep 16</time>
                      </div>
                      <div class="mt-2">
                        <span className="px-2 py-1 leading-tight inline-flex items-center bg-teal-100 rounded">
                          <svg className="h-2 w-2 text-teal-500" viewBox="0 0 8 8" fill="currentColor">
                            <circle cx="4" cy="4" r="3" />
                          </svg>
                          <span className="ml-1 text-sm font-medium text-teal-900">Feature Request</span>
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="mt-3">
                  <a href="https://" className="block p-5 bg-white rounded-md shadow">
                    <div className="flex justify-between">
                      <p className="text-sm font-medium text-gray-900">Add discount code to checkout page</p>
                      <span>
                        <img className="rounded-full" src="https://i.pravatar.cc/36" alt="user" />
                      </span>
                    </div>
                    <div className="flex justify-between items-baseline">
                      <div className="text-sm text-gray-600">
                        <time datetime="2021-09-16">Sep 16</time>
                      </div>
                      <div class="mt-2">
                        <span className="px-2 py-1 leading-tight inline-flex items-center bg-teal-100 rounded">
                          <svg className="h-2 w-2 text-teal-500" viewBox="0 0 8 8" fill="currentColor">
                            <circle cx="4" cy="4" r="3" />
                          </svg>
                          <span className="ml-1 text-sm font-medium text-teal-900">Feature Request</span>
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="mt-3">
                  <a href="https://" className="block p-5 bg-white rounded-md shadow">
                    <div className="flex justify-between">
                      <p className="text-sm font-medium text-gray-900">Add discount code to checkout page</p>
                      <span>
                        <img className="rounded-full" src="https://i.pravatar.cc/36" alt="user" />
                      </span>
                    </div>
                    <div className="flex justify-between items-baseline">
                      <div className="text-sm text-gray-600">
                        <time datetime="2021-09-16">Sep 16</time>
                      </div>
                      <div class="mt-2">
                        <span className="px-2 py-1 leading-tight inline-flex items-center bg-teal-100 rounded">
                          <svg className="h-2 w-2 text-teal-500" viewBox="0 0 8 8" fill="currentColor">
                            <circle cx="4" cy="4" r="3" />
                          </svg>
                          <span className="ml-1 text-sm font-medium text-teal-900">Feature Request</span>
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="mt-3">
                  <a href="https://" className="block p-5 bg-white rounded-md shadow">
                    <div className="flex justify-between">
                      <p className="text-sm font-medium text-gray-900">Add discount code to checkout page</p>
                      <span>
                        <img className="rounded-full" src="https://i.pravatar.cc/36" alt="user" />
                      </span>
                    </div>
                    <div className="flex justify-between items-baseline">
                      <div className="text-sm text-gray-600">
                        <time datetime="2021-09-16">Sep 16</time>
                      </div>
                      <div class="mt-2">
                        <span className="px-2 py-1 leading-tight inline-flex items-center bg-teal-100 rounded">
                          <svg className="h-2 w-2 text-teal-500" viewBox="0 0 8 8" fill="currentColor">
                            <circle cx="4" cy="4" r="3" />
                          </svg>
                          <span className="ml-1 text-sm font-medium text-teal-900">Feature Request</span>
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="mt-3">
                  <a href="https://" className="block p-5 bg-white rounded-md shadow">
                    <div className="flex justify-between">
                      <p className="text-sm font-medium text-gray-900">Add discount code to checkout page</p>
                      <span>
                        <img className="rounded-full" src="https://i.pravatar.cc/36" alt="user" />
                      </span>
                    </div>
                    <div className="flex justify-between items-baseline">
                      <div className="text-sm text-gray-600">
                        <time datetime="2021-09-16">Sep 16</time>
                      </div>
                      <div class="mt-2">
                        <span className="px-2 py-1 leading-tight inline-flex items-center bg-teal-100 rounded">
                          <svg className="h-2 w-2 text-teal-500" viewBox="0 0 8 8" fill="currentColor">
                            <circle cx="4" cy="4" r="3" />
                          </svg>
                          <span className="ml-1 text-sm font-medium text-teal-900">Feature Request</span>
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="mt-3">
                  <a href="https://" className="block p-5 bg-white rounded-md shadow">
                    <div className="flex justify-between">
                      <p className="text-sm font-medium text-gray-900">Add discount code to checkout page</p>
                      <span>
                        <img className="rounded-full" src="https://i.pravatar.cc/36" alt="user" />
                      </span>
                    </div>
                    <div className="flex justify-between items-baseline">
                      <div className="text-sm text-gray-600">
                        <time datetime="2021-09-16">Sep 16</time>
                      </div>
                      <div class="mt-2">
                        <span className="px-2 py-1 leading-tight inline-flex items-center bg-teal-100 rounded">
                          <svg className="h-2 w-2 text-teal-500" viewBox="0 0 8 8" fill="currentColor">
                            <circle cx="4" cy="4" r="3" />
                          </svg>
                          <span className="ml-1 text-sm font-medium text-teal-900">Feature Request</span>
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="mt-3">
                  <a href="https://" className="block p-5 bg-white rounded-md shadow">
                    <div className="flex justify-between">
                      <p className="text-sm font-medium text-gray-900">Add discount code to checkout page</p>
                      <span>
                        <img className="rounded-full" src="https://i.pravatar.cc/36" alt="user" />
                      </span>
                    </div>
                    <div className="flex justify-between items-baseline">
                      <div className="text-sm text-gray-600">
                        <time datetime="2021-09-16">Sep 16</time>
                      </div>
                      <div class="mt-2">
                        <span className="px-2 py-1 leading-tight inline-flex items-center bg-teal-100 rounded">
                          <svg className="h-2 w-2 text-teal-500" viewBox="0 0 8 8" fill="currentColor">
                            <circle cx="4" cy="4" r="3" />
                          </svg>
                          <span className="ml-1 text-sm font-medium text-teal-900">Feature Request</span>
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div className="ml-3 flex-shrink-0 p-3 w-80 bg-gray-100 rounded-md">
              <h3 className="text-sm font-medium text-gray-900">Backlog</h3>
              <ul className="mt-2">
                <li>
                  <a href="https://" className="block p-5 bg-white rounded-md shadow">
                    <div className="flex justify-between">
                      <p className="text-sm font-medium text-gray-900">Add discount code to checkout page</p>
                      <span>
                        <img className="rounded-full" src="https://i.pravatar.cc/36" alt="user" />
                      </span>
                    </div>
                    <div className="flex justify-between items-baseline">
                      <div className="text-sm text-gray-600">
                        <time datetime="2021-09-16">Sep 16</time>
                      </div>
                      <div class="mt-2">
                        <span className="px-2 py-1 leading-tight inline-flex items-center bg-teal-100 rounded">
                          <svg className="h-2 w-2 text-teal-500" viewBox="0 0 8 8" fill="currentColor">
                            <circle cx="4" cy="4" r="3" />
                          </svg>
                          <span className="ml-1 text-sm font-medium text-teal-900">Feature Request</span>
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="mt-3">
                  <a href="https://" className="block p-5 bg-white rounded-md shadow">
                    <div className="flex justify-between">
                      <p className="text-sm font-medium text-gray-900">Add discount code to checkout page</p>
                      <span>
                        <img className="rounded-full" src="https://i.pravatar.cc/36" alt="user" />
                      </span>
                    </div>
                    <div className="flex justify-between items-baseline">
                      <div className="text-sm text-gray-600">
                        <time datetime="2021-09-16">Sep 16</time>
                      </div>
                      <div class="mt-2">
                        <span className="px-2 py-1 leading-tight inline-flex items-center bg-teal-100 rounded">
                          <svg className="h-2 w-2 text-teal-500" viewBox="0 0 8 8" fill="currentColor">
                            <circle cx="4" cy="4" r="3" />
                          </svg>
                          <span className="ml-1 text-sm font-medium text-teal-900">Feature Request</span>
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="mt-3">
                  <a href="https://" className="block p-5 bg-white rounded-md shadow">
                    <div className="flex justify-between">
                      <p className="text-sm font-medium text-gray-900">Add discount code to checkout page</p>
                      <span>
                        <img className="rounded-full" src="https://i.pravatar.cc/36" alt="user" />
                      </span>
                    </div>
                    <div className="flex justify-between items-baseline">
                      <div className="text-sm text-gray-600">
                        <time datetime="2021-09-16">Sep 16</time>
                      </div>
                      <div class="mt-2">
                        <span className="px-2 py-1 leading-tight inline-flex items-center bg-teal-100 rounded">
                          <svg className="h-2 w-2 text-teal-500" viewBox="0 0 8 8" fill="currentColor">
                            <circle cx="4" cy="4" r="3" />
                          </svg>
                          <span className="ml-1 text-sm font-medium text-teal-900">Feature Request</span>
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="mt-3">
                  <a href="https://" className="block p-5 bg-white rounded-md shadow">
                    <div className="flex justify-between">
                      <p className="text-sm font-medium text-gray-900">Add discount code to checkout page</p>
                      <span>
                        <img className="rounded-full" src="https://i.pravatar.cc/36" alt="user" />
                      </span>
                    </div>
                    <div className="flex justify-between items-baseline">
                      <div className="text-sm text-gray-600">
                        <time datetime="2021-09-16">Sep 16</time>
                      </div>
                      <div class="mt-2">
                        <span className="px-2 py-1 leading-tight inline-flex items-center bg-teal-100 rounded">
                          <svg className="h-2 w-2 text-teal-500" viewBox="0 0 8 8" fill="currentColor">
                            <circle cx="4" cy="4" r="3" />
                          </svg>
                          <span className="ml-1 text-sm font-medium text-teal-900">Feature Request</span>
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="mt-3">
                  <a href="https://" className="block p-5 bg-white rounded-md shadow">
                    <div className="flex justify-between">
                      <p className="text-sm font-medium text-gray-900">Add discount code to checkout page</p>
                      <span>
                        <img className="rounded-full" src="https://i.pravatar.cc/36" alt="user" />
                      </span>
                    </div>
                    <div className="flex justify-between items-baseline">
                      <div className="text-sm text-gray-600">
                        <time datetime="2021-09-16">Sep 16</time>
                      </div>
                      <div class="mt-2">
                        <span className="px-2 py-1 leading-tight inline-flex items-center bg-teal-100 rounded">
                          <svg className="h-2 w-2 text-teal-500" viewBox="0 0 8 8" fill="currentColor">
                            <circle cx="4" cy="4" r="3" />
                          </svg>
                          <span className="ml-1 text-sm font-medium text-teal-900">Feature Request</span>
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div className="ml-3 flex-shrink-0 p-3 w-80 bg-gray-100 rounded-md">
              <h3 className="text-sm font-medium text-gray-900">Backlog</h3>
              <ul className="mt-2">
                <li>
                  <a href="https://" className="block p-5 bg-white rounded-md shadow">
                    <div className="flex justify-between">
                      <p className="text-sm font-medium text-gray-900">Add discount code to checkout page</p>
                      <span>
                        <img className="rounded-full" src="https://i.pravatar.cc/36" alt="user" />
                      </span>
                    </div>
                    <div className="flex justify-between items-baseline">
                      <div className="text-sm text-gray-600">
                        <time datetime="2021-09-16">Sep 16</time>
                      </div>
                      <div class="mt-2">
                        <span className="px-2 py-1 leading-tight inline-flex items-center bg-teal-100 rounded">
                          <svg className="h-2 w-2 text-teal-500" viewBox="0 0 8 8" fill="currentColor">
                            <circle cx="4" cy="4" r="3" />
                          </svg>
                          <span className="ml-1 text-sm font-medium text-teal-900">Feature Request</span>
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="mt-3">
                  <a href="https://" className="block p-5 bg-white rounded-md shadow">
                    <div className="flex justify-between">
                      <p className="text-sm font-medium text-gray-900">Add discount code to checkout page</p>
                      <span>
                        <img className="rounded-full" src="https://i.pravatar.cc/36" alt="user" />
                      </span>
                    </div>
                    <div className="flex justify-between items-baseline">
                      <div className="text-sm text-gray-600">
                        <time datetime="2021-09-16">Sep 16</time>
                      </div>
                      <div class="mt-2">
                        <span className="px-2 py-1 leading-tight inline-flex items-center bg-teal-100 rounded">
                          <svg className="h-2 w-2 text-teal-500" viewBox="0 0 8 8" fill="currentColor">
                            <circle cx="4" cy="4" r="3" />
                          </svg>
                          <span className="ml-1 text-sm font-medium text-teal-900">Feature Request</span>
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="mt-3">
                  <a href="https://" className="block p-5 bg-white rounded-md shadow">
                    <div className="flex justify-between">
                      <p className="text-sm font-medium text-gray-900">Add discount code to checkout page</p>
                      <span>
                        <img className="rounded-full" src="https://i.pravatar.cc/36" alt="user" />
                      </span>
                    </div>
                    <div className="flex justify-between items-baseline">
                      <div className="text-sm text-gray-600">
                        <time datetime="2021-09-16">Sep 16</time>
                      </div>
                      <div class="mt-2">
                        <span className="px-2 py-1 leading-tight inline-flex items-center bg-teal-100 rounded">
                          <svg className="h-2 w-2 text-teal-500" viewBox="0 0 8 8" fill="currentColor">
                            <circle cx="4" cy="4" r="3" />
                          </svg>
                          <span className="ml-1 text-sm font-medium text-teal-900">Feature Request</span>
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="mt-3">
                  <a href="https://" className="block p-5 bg-white rounded-md shadow">
                    <div className="flex justify-between">
                      <p className="text-sm font-medium text-gray-900">Add discount code to checkout page</p>
                      <span>
                        <img className="rounded-full" src="https://i.pravatar.cc/36" alt="user" />
                      </span>
                    </div>
                    <div className="flex justify-between items-baseline">
                      <div className="text-sm text-gray-600">
                        <time datetime="2021-09-16">Sep 16</time>
                      </div>
                      <div class="mt-2">
                        <span className="px-2 py-1 leading-tight inline-flex items-center bg-teal-100 rounded">
                          <svg className="h-2 w-2 text-teal-500" viewBox="0 0 8 8" fill="currentColor">
                            <circle cx="4" cy="4" r="3" />
                          </svg>
                          <span className="ml-1 text-sm font-medium text-teal-900">Feature Request</span>
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="mt-3">
                  <a href="https://" className="block p-5 bg-white rounded-md shadow">
                    <div className="flex justify-between">
                      <p className="text-sm font-medium text-gray-900">Add discount code to checkout page</p>
                      <span>
                        <img className="rounded-full" src="https://i.pravatar.cc/36" alt="user" />
                      </span>
                    </div>
                    <div className="flex justify-between items-baseline">
                      <div className="text-sm text-gray-600">
                        <time datetime="2021-09-16">Sep 16</time>
                      </div>
                      <div class="mt-2">
                        <span className="px-2 py-1 leading-tight inline-flex items-center bg-teal-100 rounded">
                          <svg className="h-2 w-2 text-teal-500" viewBox="0 0 8 8" fill="currentColor">
                            <circle cx="4" cy="4" r="3" />
                          </svg>
                          <span className="ml-1 text-sm font-medium text-teal-900">Feature Request</span>
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div className="ml-3 flex-shrink-0 p-3 w-80 bg-gray-100 rounded-md">
              <h3 className="text-sm font-medium text-gray-900">Backlog</h3>
              <ul className="mt-2">
                <li>
                  <a href="https://" className="block p-5 bg-white rounded-md shadow">
                    <div className="flex justify-between">
                      <p className="text-sm font-medium text-gray-900">Add discount code to checkout page</p>
                      <span>
                        <img className="rounded-full" src="https://i.pravatar.cc/36" alt="user" />
                      </span>
                    </div>
                    <div className="flex justify-between items-baseline">
                      <div className="text-sm text-gray-600">
                        <time datetime="2021-09-16">Sep 16</time>
                      </div>
                      <div class="mt-2">
                        <span className="px-2 py-1 leading-tight inline-flex items-center bg-teal-100 rounded">
                          <svg className="h-2 w-2 text-teal-500" viewBox="0 0 8 8" fill="currentColor">
                            <circle cx="4" cy="4" r="3" />
                          </svg>
                          <span className="ml-1 text-sm font-medium text-teal-900">Feature Request</span>
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="mt-3">
                  <a href="https://" className="block p-5 bg-white rounded-md shadow">
                    <div className="flex justify-between">
                      <p className="text-sm font-medium text-gray-900">Add discount code to checkout page</p>
                      <span>
                        <img className="rounded-full" src="https://i.pravatar.cc/36" alt="user" />
                      </span>
                    </div>
                    <div className="flex justify-between items-baseline">
                      <div className="text-sm text-gray-600">
                        <time datetime="2021-09-16">Sep 16</time>
                      </div>
                      <div class="mt-2">
                        <span className="px-2 py-1 leading-tight inline-flex items-center bg-teal-100 rounded">
                          <svg className="h-2 w-2 text-teal-500" viewBox="0 0 8 8" fill="currentColor">
                            <circle cx="4" cy="4" r="3" />
                          </svg>
                          <span className="ml-1 text-sm font-medium text-teal-900">Feature Request</span>
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="mt-3">
                  <a href="https://" className="block p-5 bg-white rounded-md shadow">
                    <div className="flex justify-between">
                      <p className="text-sm font-medium text-gray-900">Add discount code to checkout page</p>
                      <span>
                        <img className="rounded-full" src="https://i.pravatar.cc/36" alt="user" />
                      </span>
                    </div>
                    <div className="flex justify-between items-baseline">
                      <div className="text-sm text-gray-600">
                        <time datetime="2021-09-16">Sep 16</time>
                      </div>
                      <div class="mt-2">
                        <span className="px-2 py-1 leading-tight inline-flex items-center bg-teal-100 rounded">
                          <svg className="h-2 w-2 text-teal-500" viewBox="0 0 8 8" fill="currentColor">
                            <circle cx="4" cy="4" r="3" />
                          </svg>
                          <span className="ml-1 text-sm font-medium text-teal-900">Feature Request</span>
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="mt-3">
                  <a href="https://" className="block p-5 bg-white rounded-md shadow">
                    <div className="flex justify-between">
                      <p className="text-sm font-medium text-gray-900">Add discount code to checkout page</p>
                      <span>
                        <img className="rounded-full" src="https://i.pravatar.cc/36" alt="user" />
                      </span>
                    </div>
                    <div className="flex justify-between items-baseline">
                      <div className="text-sm text-gray-600">
                        <time datetime="2021-09-16">Sep 16</time>
                      </div>
                      <div class="mt-2">
                        <span className="px-2 py-1 leading-tight inline-flex items-center bg-teal-100 rounded">
                          <svg className="h-2 w-2 text-teal-500" viewBox="0 0 8 8" fill="currentColor">
                            <circle cx="4" cy="4" r="3" />
                          </svg>
                          <span className="ml-1 text-sm font-medium text-teal-900">Feature Request</span>
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="mt-3">
                  <a href="https://" className="block p-5 bg-white rounded-md shadow">
                    <div className="flex justify-between">
                      <p className="text-sm font-medium text-gray-900">Add discount code to checkout page</p>
                      <span>
                        <img className="rounded-full" src="https://i.pravatar.cc/36" alt="user" />
                      </span>
                    </div>
                    <div className="flex justify-between items-baseline">
                      <div className="text-sm text-gray-600">
                        <time datetime="2021-09-16">Sep 16</time>
                      </div>
                      <div class="mt-2">
                        <span className="px-2 py-1 leading-tight inline-flex items-center bg-teal-100 rounded">
                          <svg className="h-2 w-2 text-teal-500" viewBox="0 0 8 8" fill="currentColor">
                            <circle cx="4" cy="4" r="3" />
                          </svg>
                          <span className="ml-1 text-sm font-medium text-teal-900">Feature Request</span>
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default App;
