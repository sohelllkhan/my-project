// backend/models/donor.js
import mongoose from 'mongoose';

const donorSchema = new mongoose.Schema({
  name: String,
  bloodGroup: String,
  area: String,
  phone: String,
  latitude: Number,
  longitude: Number,
});

const Donor = mongoose.model('Donor', donorSchema);
export default Donor;
