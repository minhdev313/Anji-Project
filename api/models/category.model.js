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
}, { timestamps: true }); // Enable automatic timestamps updates

// Create the Category model
const Category = model('Category', categorySchema);

export default Category; // Export the Category model
