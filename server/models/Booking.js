// models/Booking.js
import mongoose from 'mongoose';

const BookingSchema = new mongoose.Schema({
  user: String,
  movieId: mongoose.Schema.Types.ObjectId,
  seats: Number,
  seatNumbers: [String],
  time: String,
  date: String
});

const Booking = mongoose.model('Booking', BookingSchema);
export default Booking;
