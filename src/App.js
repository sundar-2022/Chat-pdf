// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ChatLayout from './ChatLayout';
import Home from './Home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home component will be rendered at the root path */}
        <Route path="/chat" element={<ChatLayout />} /> {/* ChatLayout component will be rendered at the /chat path */}
      </Routes>
    </Router>
  );
};

export default App;
