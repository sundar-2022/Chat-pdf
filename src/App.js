import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './Home';
import ChatLayout from './ChatLayout';
import './App.css'; // Import your App.css here

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Navigate to ="/Home" />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/ChatLayout" element={<ChatLayout />} />
      </Routes>
    </Router>
  );
}

export default App;

