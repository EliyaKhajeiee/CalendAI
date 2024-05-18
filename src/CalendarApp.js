// src/CalendarApp.js
import React, { useState } from 'react';
import { format } from 'date-fns';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './CalendarApp.css';

const CalendarApp = () => {
  const [view, setView] = useState('month');
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleViewChange = (newView) => 
    {
    setView(newView);
  };

  const handleDateChange = (date) => 
    {
    setSelectedDate(date);
  };

  return (
    <div className="app-container">
      <div className="left-panel">
        <h2>Text Boxes</h2>
        <div>
          <label>
            Text Box 1:
            <input type="text" />
          </label>
        </div>
        <div>
          <label>
            Text Box 2:
            <input type="text" />
          </label>
        </div>
        {/*PUT BS TEXT BOXES HERE?*/ }
      </div>
      <div className="right-panel">
        <h2>Calendar</h2>
        <div className="view-selector">
          <button onClick={() => handleViewChange('day')}>Day</button>
          <button onClick={() => handleViewChange('week')}>Week</button>
          <button onClick={() => handleViewChange('month')}>Month</button>
        </div>
        <Calendar
  value={selectedDate}
  onChange={handleDateChange}
  view={view}
  calendarType="US"
  showNeighboringMonth={false}
/>

        <div className="date-display">
          {view === 'day' && <p>Selected Date: {format(selectedDate, 'PP')}</p>}
          {view === 'week' && <p>Selected Week: {format(selectedDate, 'wo')} week of the year</p>}
          {view === 'month' && <p>Selected Month: {format(selectedDate, 'MMMM yyyy')}</p>}
        </div>
      </div>
    </div>
  );
};

export default CalendarApp;
