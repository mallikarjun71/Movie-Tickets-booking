import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import movieRoutes from './routes/movies.js';
import bookingRoutes from './routes/bookings.js'

const app = express();
dotenv.config();

app.use(bodyParser.json());
app.use(cors());
app.use('/api/movies', movieRoutes);
app.use('/api/bookings', bookingRoutes);

const port = process.env.PORT;
const MONGOURL = process.env.MONGO_URL;

mongoose.connect(MONGOURL)
  .then(() => {
    console.log("DB connected");
    app.listen(port, () => {
      console.log(`Listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.log("Error connecting to DB:", error);
  });

