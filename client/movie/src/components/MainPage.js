import React from 'react';
import './MainPage.css';

const MainPage = () => {
  return (
    <div className="main-layout">
      <header className="top-nav">
        <div className="logo">🎬</div>
        <h2>Miraj Cinemas</h2>
        <nav className="nav-links">
          <button>Home</button>
          <button>Profile</button>
        </nav>
      </header>

      <aside className="sidebar">
        <h4>Categories</h4>
        <button>Action</button>
        <button>Romantic</button>
        <button>Comedy</button>
        <button>Horror</button>
      </aside>

      <main className="main-content">
        <input className="search-bar" placeholder="Search Movies..." />
        <div className="movie-listing">
          <div className="movie-card">Movie 1</div>
          <div className="movie-card">Movie 2</div>
        </div>
      </main>
    </div>
  );
};

export default MainPage;
