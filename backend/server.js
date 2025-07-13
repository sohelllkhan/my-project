// backend/server.js

//const express = require('express');
//const mongoose = require('mongoose');
//const cors = require('cors');
//const dotenv = require('dotenv');
//const Donor = require('./models/Donor');


//dotenv.config();

// server.js (ES module style)
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import Donor from './models/donor.js';

dotenv.config();

//const app = express();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(cors({
  origin: 'https://sohelllkhan.github.io/my-project/', // or '*'
}));
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
    console.log("📦 Received donor:", req.body);
    const donor = new Donor(req.body);
    await donor.save();
    console.log("✅ Donor saved.");
    res.status(201).json({ message: 'Donor saved successfully' });
  } catch (err) {
    console.error("❌ Error saving donor:", err);
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

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
