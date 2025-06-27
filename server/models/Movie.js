import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  category: String,
  posterUrl: String,
  releaseDate: Date
});

const Movie = mongoose.model('Movie', movieSchema);
export default Movie;
