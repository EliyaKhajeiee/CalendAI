// src/App.js
import React from 'react';
import './App.css';
import CalendarApp from './calendar/CalendarApp'; // Import the CalendarApp component
import NavbarApp from './navbar/NavbarApp';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Account from './account/account';
import Settings from './settings/settings';

function App() {
  return (
    <div className="App">

        <NavbarApp />
            <Routes>
                <Route path="/src/settings" element={<Settings />} />
                <Route path="/src/account/account" element={<Account />} />
            </Routes>
      
      <CalendarApp /> {}
    </div>
  );
}

export default App;
