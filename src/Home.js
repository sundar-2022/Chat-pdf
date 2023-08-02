// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import the updated Home.css file

const Home = () => {
  return (
    <div className="home-container"> {/* Use a specific class for the Home page container */}
      <h1>Welcome to the Home Page</h1>
      <div className="home-image-container"> {/* Use a specific class for the Home page image container */}
        <Link to="/chat">
          <img src="/Homepage.png" alt="Chat PDF" />
        </Link>
      </div>
    </div>
  );
};

export default Home;
