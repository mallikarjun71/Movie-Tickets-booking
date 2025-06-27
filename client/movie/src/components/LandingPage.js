import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-container">
      <div className="overlay">
        <h1>Welcome to MovieTime</h1>
        <p>Now Showing</p>
        <div className="movie-strip">
          <img src="/images/movie1.jpg" alt="Movie 1" />
          <img src="/images/movie2.jpg" alt="Movie 2" />
          <img src="/images/movie3.jpg" alt="Movie 3" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
