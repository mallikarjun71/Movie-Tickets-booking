// src/components/BookingPopup.js
import React, { useState } from 'react';
import axios from 'axios';
import './BookingPopup.css'; // Add basic styling

export default function BookingPopup({ movie, onClose }) {
  const [seats, setSeats] = useState(1);
  const [confirmed, setConfirmed] = useState(null);

  const handleFinish = async () => {
    const seatNumbers = Array.from({ length: seats }, (_, i) => `A${i + 1}`);
    const res = await axios.post('http://localhost:1234/api/bookings', {
      user: 'Varun',
      movieId: movie._id,
      seats,
      time: '6:30 PM',
      date: '2025-07-05',
      seatNumbers
    });
    setConfirmed(res.data.details);
  };

  return (
    <div className="popup">
      {!confirmed ? (
        <>
          <h4>Select Tickets for {movie.title}</h4>
          <label>
            Tickets:
            <input
              type="number"
              min="1"
              max="6"
              value={seats}
              onChange={(e) => setSeats(+e.target.value)}
            />
          </label>
          <div>
            <button onClick={handleFinish}>Finish</button>
            <button onClick={onClose}>Cancel</button>
          </div>
        </>
      ) : (
        <div>
          <h2>Booking Confirmed</h2>
          <p>Movie: {confirmed.movie}</p>
          <p>Seats: {confirmed.seats}</p>
          <p>Seat Numbers: {confirmed.seatNumbers.join(', ')}</p>
          <p>Time: {confirmed.time}</p>
          <p>Date: {confirmed.date}</p>
        </div>
      )}
    </div>
  );
}
