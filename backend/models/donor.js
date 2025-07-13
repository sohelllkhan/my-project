import mongoose from 'mongoose';

const donorSchema = new mongoose.Schema({
  name: String,
  bloodGroup: String,
  area: String,
  phone: String,
  latitude: Number,
  longitude: Number,
});

module.exports = mongoose.model('Donor', donorSchema);
