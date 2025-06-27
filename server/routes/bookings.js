// server/routes/bookings.js
import express from 'express';
import Booking from '../models/Booking.js';

const router = express.Router();

// Create a booking (already exists)
router.post('/', async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();
    res.status(201).json({
      message: 'Booking successful',
      details: booking,
    });
  } catch (error) {
    res.status(400).json({ error: 'Booking failed' });
  }
});

// ✅ GET all bookings
router.get('/', async (req, res) => {
  try {
    const bookings = await Booking.find().populate('movieId');
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch bookings' });
  }
});

export default router;
