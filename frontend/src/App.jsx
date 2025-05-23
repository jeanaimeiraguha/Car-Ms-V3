import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Dashboard from './Dashboard';
import ParkingSlot from './ParkingSlot';
import Car from './Car';
import ParkingRecord from './ParkingRecord';
import Payment from './Payment';
import Report from './Report';
import Login from './Login'; // ✅ Import Login component

function App() {
  return (
    <Router>
      <Routes>
        {/* Public route for login */}
        <Route path="/login" element={<Login />} />

        {/* Protected Dashboard route and its children */}
        <Route path="/" element={<Dashboard />}>
          <Route index element={<Navigate to="parkingslots" replace />} />
          <Route path="parkingslots" element={<ParkingSlot />} />
          <Route path="cars" element={<Car />} />
          <Route path="parkingrecords" element={<ParkingRecord />} />
          <Route path="payments" element={<Payment />} />
          <Route path="report" element={<Report />} />
        </Route>

        {/* Fallback route to redirect unknown URLs */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
