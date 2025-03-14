'use client';

import { useState } from 'react';
import Sidebar from '../components/Sidebar';

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const currentDate = new Date();

const events = [
  {
    id: 1,
    title: 'Rock Revolt',
    time: '7:00 PM',
    date: new Date(2024, 2, 15),
    type: 'Music',
    color: 'bg-pink-100 text-pink-800'
  },
  {
    id: 2,
    title: 'Tech Conference',
    time: '9:00 AM',
    date: new Date(2024, 2, 18),
    type: 'Conference',
    color: 'bg-blue-100 text-blue-800'
  },
  {
    id: 3,
    title: 'Art Exhibition',
    time: '3:00 PM',
    date: new Date(2024, 2, 20),
    type: 'Art',
    color: 'bg-purple-100 text-purple-800'
  }
];

export default function Calendar() {
  const [selectedDate, setSelectedDate] = useState(currentDate);
  const [view, setView] = useState('month'); // month, week, day

  // Get calendar days
  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = [];
    
    // Add previous month's days
    for (let i = 0; i < firstDay.getDay(); i++) {
      const prevDate = new Date(year, month, -i);
      daysInMonth.unshift({ date: prevDate, isCurrentMonth: false });
    }
    
    // Add current month's days
    for (let i = 1; i <= lastDay.getDate(); i++) {
      daysInMonth.push({ date: new Date(year, month, i), isCurrentMonth: true });
    }
    
    // Add next month's days
    const remainingDays = 42 - daysInMonth.length; // 6 rows * 7 days
    for (let i = 1; i <= remainingDays; i++) {
      daysInMonth.push({ date: new Date(year, month + 1, i), isCurrentMonth: false });
    }
    
    return daysInMonth;
  };

  const calendarDays = getDaysInMonth(selectedDate);

  const getEventsForDate = (date) => {
    return events.filter(event => 
      event.date.getDate() === date.getDate() &&
      event.date.getMonth() === date.getMonth() &&
      event.date.getFullYear() === date.getFullYear()
    );
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      
      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <header className="bg-white border-b border-gray-200">
          <div className="flex justify-between items-center px-8 py-4">
            <div>
              <div className="text-sm text-gray-500 mb-1">Calendar</div>
              <h1 className="text-2xl font-semibold">Calendar</h1>
            </div>
            <div className="flex items-center gap-4">
              <button className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600">
                + Create event
              </button>
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
          {/* Calendar Controls */}
          <div className="bg-white rounded-lg shadow mb-6">
            <div className="p-4 flex items-center justify-between border-b">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setSelectedDate(new Date())}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
                >
                  Today
                </button>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSelectedDate(new Date(selectedDate.setMonth(selectedDate.getMonth() - 1)))}
                    className="p-2 hover:bg-gray-100 rounded-full"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <h2 className="text-lg font-semibold">
                    {selectedDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
                  </h2>
                  <button
                    onClick={() => setSelectedDate(new Date(selectedDate.setMonth(selectedDate.getMonth() + 1)))}
                    className="p-2 hover:bg-gray-100 rounded-full"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setView('month')}
                  className={`px-4 py-2 text-sm font-medium rounded-md ${
                    view === 'month' ? 'bg-gray-900 text-white' : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  Month
                </button>
                <button
                  onClick={() => setView('week')}
                  className={`px-4 py-2 text-sm font-medium rounded-md ${
                    view === 'week' ? 'bg-gray-900 text-white' : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  Week
                </button>
                <button
                  onClick={() => setView('day')}
                  className={`px-4 py-2 text-sm font-medium rounded-md ${
                    view === 'day' ? 'bg-gray-900 text-white' : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  Day
                </button>
              </div>
            </div>

            {/* Calendar Grid */}
            <div className="p-4">
              {/* Days of week */}
              <div className="grid grid-cols-7 gap-4 mb-4">
                {days.map(day => (
                  <div key={day} className="text-sm font-medium text-gray-500 text-center">
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar days */}
              <div className="grid grid-cols-7 gap-4">
                {calendarDays.map(({ date, isCurrentMonth }, index) => {
                  const dayEvents = getEventsForDate(date);
                  const isToday = date.toDateString() === new Date().toDateString();

                  return (
                    <div
                      key={index}
                      className={`min-h-[100px] p-2 rounded-lg border ${
                        isCurrentMonth ? 'bg-white' : 'bg-gray-50'
                      } ${isToday ? 'border-pink-500' : 'border-gray-200'}`}
                    >
                      <div className="text-right">
                        <span className={`text-sm ${
                          isCurrentMonth ? 'text-gray-900' : 'text-gray-400'
                        } ${isToday ? 'font-bold' : ''}`}>
                          {date.getDate()}
                        </span>
                      </div>
                      <div className="mt-2 space-y-1">
                        {dayEvents.map(event => (
                          <div
                            key={event.id}
                            className={`text-xs p-1 rounded ${event.color} truncate cursor-pointer`}
                          >
                            {event.time} - {event.title}
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-4">Upcoming Events</h3>
            <div className="space-y-4">
              {events.map(event => (
                <div key={event.id} className="flex items-center gap-4 p-4 rounded-lg border border-gray-200">
                  <div className={`w-2 h-2 rounded-full ${event.color.split(' ')[0]}`} />
                  <div className="flex-1">
                    <h4 className="font-medium">{event.title}</h4>
                    <p className="text-sm text-gray-500">
                      {event.date.toLocaleDateString()} at {event.time}
                    </p>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full ${event.color}`}>
                    {event.type}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 