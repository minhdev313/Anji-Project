import { Schema, model } from 'mongoose'; // Import required classes

const locationSchema = new Schema({
  district: {
    type: String,
    required: true,
    trim: true // Optional: Remove leading/trailing whitespace
  },
  city: {
    type: String,
    required: true,
    trim: true // Optional: Remove leading/trailing whitespace
  },
  ward: {
    type: String,
    required: true,
    trim: true // Optional: Remove leading/trailing whitespace
  },
  // Additional properties you might want to include:
  country: { type: String }, // Optional: Country
  state: { type: String }, // Optional: State/Province
  postalCode: { type: String }, // Optional: Postal code/ZIP code
}, { timestamps: true }); // Enable timestamps

// Create the Location model
const Location = model('Location', locationSchema);

export default Location; // Export the Location model
