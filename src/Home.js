import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="welcome-text">Welcome to the Home Page</h1>
      <div className="home-image-container">
        <Link to="/chat">
          <img src="/Homepage.png" alt="Chat PDF" />
        </Link>
        <div className="image-text-container">
          <p className="image-text">PDF TO TEXT CONVERSION (Q/A)</p>
          <p className="image-text">There is an easy way to edit PDF text: convert your PDF documents to text with the help of this tool</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
