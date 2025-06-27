// src/components/MovieCard.js
import React, { useState } from 'react';
import BookingPopup from './BookingPopup';
import './MovieCard.css';

export default function MovieCard({ movie }) {
  const [show, setShow] = useState(false);

  return (
    <div
      className="movie-card"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <img src={movie.posterUrl} alt={movie.title} />
      <h3>{movie.title}</h3>
      {show && <BookingPopup movie={movie} onClose={() => setShow(false)} />}
    </div>
  );
}
