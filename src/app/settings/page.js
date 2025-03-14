'use client';

import { useState } from 'react';
import Image from 'next/image';
import Sidebar from '../components/Sidebar';

export default function Settings() {
  const [activeTab, setActiveTab] = useState('profile');
  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    pushNotifications: false,
    marketingEmails: true,
    newMessages: true,
    ticketSales: true,
    eventReminders: true
  });

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      
      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <header className="bg-white border-b border-gray-200">
          <div className="flex justify-between items-center px-8 py-4">
            <div>
              <div className="text-sm text-gray-500 mb-1">Settings</div>
              <h1 className="text-2xl font-semibold">Account Settings</h1>
            </div>
            <div className="flex items-center gap-4">
              <button className="text-gray-400 hover:text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                <div>
                  <div className="text-sm font-medium">Jennifer King</div>
                  <div className="text-xs text-gray-500">@rightrealestate</div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="p-8">
          {/* Settings Content */}
          <div className="grid grid-cols-12 gap-6">
            {/* Profile Settings */}
            {activeTab === 'profile' && (
              <div className="col-span-12 md:col-span-9 space-y-6">
                <div className="bg-white rounded-lg shadow">
                  <div className="p-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-6">Profile Settings</h3>
                    <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700">First Name</label>
                          <input
                            type="text"
                            defaultValue="Jennifer"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700">Last Name</label>
                          <input
                            type="text"
                            defaultValue="King"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700">Email</label>
                          <input
                            type="email"
                            defaultValue="jennifer@example.com"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700">Phone</label>
                          <input
                            type="tel"
                            defaultValue="+1 (555) 123-4567"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Bio</label>
                        <textarea
                          rows={4}
                          defaultValue="Event organizer with 5+ years of experience..."
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
                        />
                      </div>
                      <div className="flex justify-end">
                        <button
                          type="submit"
                          className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600"
                        >
                          Save Changes
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            )}

            {/* Notifications */}
            {activeTab === 'notifications' && (
              <div className="col-span-12 md:col-span-9 space-y-6">
                <div className="bg-white rounded-lg shadow">
                  <div className="p-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-6">Notification Preferences</h3>
                    <div className="space-y-4">
                      {Object.entries(notificationSettings).map(([key, value]) => (
                        <div key={key} className="flex items-center justify-between">
                          <div>
                            <h4 className="text-sm font-medium text-gray-900">
                              {key.split(/(?=[A-Z])/).join(' ')}
                            </h4>
                            <p className="text-sm text-gray-500">
                              Receive notifications about {key.split(/(?=[A-Z])/).join(' ').toLowerCase()}
                            </p>
                          </div>
                          <button
                            onClick={() => setNotificationSettings(prev => ({
                              ...prev,
                              [key]: !prev[key]
                            }))}
                            className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 ${
                              value ? 'bg-pink-500' : 'bg-gray-200'
                            }`}
                          >
                            <span
                              className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                                value ? 'translate-x-5' : 'translate-x-0'
                              }`}
                            />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Security */}
            {activeTab === 'security' && (
              <div className="col-span-12 md:col-span-9 space-y-6">
                <div className="bg-white rounded-lg shadow">
                  <div className="p-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-6">Security Settings</h3>
                    <form className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Current Password</label>
                        <input
                          type="password"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">New Password</label>
                        <input
                          type="password"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Confirm New Password</label>
                        <input
                          type="password"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
                        />
                      </div>
                      <div className="flex justify-end">
                        <button
                          type="submit"
                          className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600"
                        >
                          Update Password
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            )}

            {/* Billing */}
            {activeTab === 'billing' && (
              <div className="col-span-12 md:col-span-9 space-y-6">
                <div className="bg-white rounded-lg shadow">
                  <div className="p-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-6">Billing Information</h3>
                    <div className="space-y-6">
                      <div className="border rounded-lg p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M2 3h20v14H2V3zm2 2v10h16V5H4zm0 12h16v2H4v-2zm8-7h6v2h-6v-2z" />
                            </svg>
                            <div className="ml-4">
                              <p className="text-sm font-medium text-gray-900">Visa ending in 4242</p>
                              <p className="text-sm text-gray-500">Expires 12/24</p>
                            </div>
                          </div>
                          <button className="text-sm text-pink-500 hover:text-pink-600">Edit</button>
                        </div>
                      </div>
                      <button className="w-full px-4 py-2 text-sm text-pink-500 border border-pink-500 rounded-lg hover:bg-pink-50">
                        Add Payment Method
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 