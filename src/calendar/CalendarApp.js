import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import './CalendarApp.css';

const localizer = momentLocalizer(moment);

const CalendarApp = () => {
  return (
    <div className="app-container">
      <div className="left-panel">
        <h2>Plan Your Day</h2>
        <div className="text-box">
          <label htmlFor="activity1">Activity 1:</label>
          <input type="text" id="activity1" className="textbox-input" placeholder="Enter your first activity" />
        </div>
        <div className="text-box">
          <label htmlFor="activity2">Activity 2:</label>
          <input type="text" id="activity2" className="textbox-input" placeholder="Enter your second activity" />
        </div>
        {/* You can add more text boxes or visual elements here */}
      </div>
      <div className="right-panel">
        <h2>Your Schedule</h2>
        <div className="calendar-container">
          <Calendar
            localizer={localizer}
            events={[]}
            defaultView="day"
            style={{ height: 500 }}
          />
          <div className="date-display">
            <p>Selected Date:</p>
            {/* Display selected date here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarApp;
