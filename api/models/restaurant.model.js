import { Schema, model } from 'mongoose'; // Import required classes

const restaurantSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true // Optional: Remove leading/trailing whitespace
  },
  address: {
    type: String,
    required: true,
    trim: true // Optional: Remove leading/trailing whitespace
  },
  district: {
    type: String,
    required: true,
    trim: true // Optional: Remove leading/trailing whitespace
  },
  location: { // Embedded location object
    type: {
      type: String,
      enum: ['Point'] // Specify location type
    },
    coordinates: {
      type: [Number], // Array of [longitude, latitude]
      required: true,
      index: '2dsphere' // Index for geospatial queries
    }
  },
  phone_number: {
    type: String,
    required: true,
    trim: true // Optional: Remove leading/trailing whitespace
  },
  dishes: [ // Array of references to Dish models
    { type: Schema.Types.ObjectId, ref: 'Dish' }
  ],
  cuisine_type: {
    type: [String],
    required: true
  },
  working_hours: {
    type: String,
    trim: true // Optional: Remove leading/trailing whitespace
  },
  price_range: {
    type: String,
    trim: true // Optional: Remove leading/trailing whitespace
  },
  website: {
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

// Create the Restaurant model
const Restaurant = model('Restaurant', restaurantSchema);

export default Restaurant; // Export the Restaurant model
