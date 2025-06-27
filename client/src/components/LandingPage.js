// src/components/LandingPage.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/main');
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  const handleSkip = () => {
    navigate('/main');
  };

  const handleAbout = () => {
    alert("CineBook is your one-stop destination for booking the latest movies! 🎬");
  };

  return (
    <div className="landing-container">
      <div className="overlay">
        <h1>Welcome to CineBook</h1>
        <p>Book your favorite movies easily!</p>

        <div className="movie-strip">
          <img src="/images/movie1.jpeg" alt="Movie 1" />
          <img src="/images/movie2.jpg" alt="Movie 2" />
          <img src="/images/movie3.jpg" alt="Movie 3" />
          <img src="/images/crew.jpeg" alt="Movie 4" />
          <img src="/images/mahi.jpg" alt="Movie 5" />
        </div>

        {/* Buttons */}
        <div className="landing-buttons">
          <button className="enter-btn" onClick={handleSkip}>Enter Now</button>
          <button className="about-btn" onClick={handleAbout}>About Us</button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
