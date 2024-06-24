import mongoose from "mongoose";

const shopSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  opening_time: {
    type: String,
    required: false,
  },
  closing_time: {
    type: String,
    required: false,
  },
  coordinates: {
    type: [Number],
    required: true
  }
});

export const Shop = mongoose.model("Shop", shopSchema);
