import mongoose from "mongoose";

const donorSchema = new mongoose.Schema({
  name: String,
  bloodGroup: String,
  phone: String,
  area: String,
  location: {
    type: {
      type: String,
      enum: ["Point"],
      required: true,
      default: "Point"
    },
    coordinates: {
      type: [Number], // [lng, lat]
      required: true
    }
  }
});

// 🔥 Required for $geoNear
donorSchema.index({ location: "2dsphere" });
//donorSchema.index({ location: "2dsphere" });

const Donor = mongoose.model("Donor", donorSchema);
export default Donor;
