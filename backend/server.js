// backend/server.js

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import Donor from './models/donor.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB connected'))
.catch((err) => {
  console.error('❌ MongoDB connection failed:');
  console.error(err.message);
  process.exit(1);
});

// Routes
app.post('/api/donors', async (req, res) => {
  try {
    const { name, bloodGroup, area, phone, latitude, longitude } = req.body;

    const donor = new Donor({
      name,
      bloodGroup,
      area,
      phone,
      latitude,
      longitude,
      location: {
        type: 'Point',
        coordinates: [longitude, latitude], // [lng, lat]
      },
    });

    await donor.save();
    res.status(201).json({ message: 'Donor saved successfully' });
  } catch (err) {
    console.error('Error saving donor:', err);
    res.status(500).json({ error: err.message });
  }
});
app.get('/api/donors', async (req, res) => {
  try {
    const donors = await Donor.find();
    res.json(donors);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Summary route for blood stock chart
app.get('/api/blood/summary', async (req, res) => {
  try {
    const summary = await Donor.aggregate([
      {
        $group: {
          _id: "$bloodGroup",
          count: { $sum: 1 }
        }
      }
    ]);
    res.json(summary);
  } catch (err) {
    console.error("❌ Error fetching blood summary:", err);
    res.status(500).json({ error: "Server error" });
  }
});
// nearby donors

  app.get('/api/donors/nearby', async (req, res) => {
  const { bloodGroup, lat, lng } = req.query;

  if (!bloodGroup || !lat || !lng) {
    return res.status(400).json({ error: "bloodGroup, lat, and lng query params are required" });
  }

  try {
    const donors = await Donor.aggregate([
      {
        $geoNear: {
          near: { type: "Point", coordinates: [parseFloat(lng), parseFloat(lat)] },
          distanceField: "distance",
          spherical: true,
          query: { bloodGroup }
        }
      },
      {$limit: 10}
    ]);
    res.json(donors);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
