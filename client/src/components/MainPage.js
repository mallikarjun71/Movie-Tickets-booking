// src/components/MainPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MainPage.css'; // Styling as you have

export default function MainPage() {
  const [movies, setMovies] = useState([]);
  const [hoveredMovie, setHoveredMovie] = useState(null);
  const [ticketCount, setTicketCount] = useState(1);
  const [bookingMessage, setBookingMessage] = useState("");

  useEffect(() => {
    axios.get("http://localhost:1234/api/movies")
      .then(res => setMovies(res.data))
      .catch(console.error);
  }, []);

  const handleBook = (movie) => {
    setHoveredMovie(movie);
    setTicketCount(1);
  };

  const confirmBooking = async () => {
    const bookingData = {
      user: "Varun",
      movieId: hoveredMovie._id,
      seats: ticketCount,
      time: "6:30 PM",
      date: "2025-07-05",
      seatNumbers: Array.from({ length: ticketCount }, (_, i) => `A${i + 1}`)
    };

    try {
       await axios.post("http://localhost:1234/api/bookings", bookingData);
      setBookingMessage(`Booking Confirmed for ${hoveredMovie.title} - ${ticketCount} tickets`);
      setHoveredMovie(null);
    } catch {
      setBookingMessage("Booking failed. Try again.");
    }
  };

  return (
    <div className="main-layout">
      {/* Top Navigation */}
     <div className="top-nav">
  <div className="nav-left">
    {}
  </div>

  <div className="nav-center">
    <span className="brand"><h2><i>🎬 ccc Entertainments</i></h2></span>
  </div>

  <div className="nav-links">
    <button>Home</button>
    <button>Profile</button>
    <button>History</button>
  </div>
</div>




      <div className="sidebar">
  <h3 style={{ marginBottom: '15px', fontSize: '18px', borderBottom: '1px solid white', paddingBottom: '8px' }}>Categories</h3>
  <button>Action</button>
  <button>Romance</button>
  <button>Comedy</button>
  <button>Drama</button>
  <button>Mythology</button>
  <button>Horror</button>
</div>


      {/* Main Content */}
      <div className="main-content">
        <input className="search-bar" placeholder="Search movies..." />

        <div className="movie-listing">
          {movies.map(movie => (
            <div
              className="movie-card"
              key={movie._id}
              onMouseEnter={() => setHoveredMovie(movie)}
              onMouseLeave={() => setHoveredMovie(null)}
            >
              <img src={movie.posterUrl} alt={movie.title} />
              <h3>{movie.title}</h3>
              <button onClick={() => handleBook(movie)}>Book Now</button>

              {hoveredMovie?._id === movie._id && (
                <div className="booking-popup">
                  <label>
                    Book Tickets:
                    <input
                      type="number"
                      min="1"
                      value={ticketCount}
                      onChange={e => setTicketCount(parseInt(e.target.value))}
                    />
                  </label>
                  <button onClick={confirmBooking}>Finish Booking</button>
                </div>
              )}
            </div>
          ))}
        </div>

        {bookingMessage && <div className="booking-status">{bookingMessage}</div>}
      </div>
    </div>
  );
}
