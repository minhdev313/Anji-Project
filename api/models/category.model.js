import { Schema, model } from 'mongoose'; // Import required classes

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true // Optional: Remove leading/trailing whitespace
  },
  description: {
    type: String,
    trim: true // Optional: Remove leading/trailing whitespace
  },
  created_at: {
    type: Date,
    default: Date.now // Set default creation time to current timestamp
  },
  updated_at: {
    type: Date,
    default: Date.now // Set default update time to current timestamp
  }
}, { timestamps: true }); // Enable automatic timestamps updates

// Create the Category model
const Category = model('Category', categorySchema);

export default Category; // Export the Category model
