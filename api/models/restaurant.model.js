import { Schema, model } from "mongoose"; // Import required classes

const restaurantSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true, // Optional: Remove leading/trailing whitespace
    },
    address: {
      type: String,
      required: true,
      trim: true, // Optional: Remove leading/trailing whitespace
    },
    link_frame: {
      type: String,
    },
    district: {
      type: String,
      required: true,
      trim: true, // Optional: Remove leading/trailing whitespace
    },
    phone_number: {
      type: String,
      required: true,
      trim: true, // Optional: Remove leading/trailing whitespace
    },
    dishes: {
      type: [Schema.Types.ObjectId],
      ref: "Dish", // Reference the 'Dish' model for relationships
    },

    working_hours: {
      type: String,
      trim: true, // Optional: Remove leading/trailing whitespace
    },
  },
  { timestamps: true }
); // Enable automatic timestamps updates

// Create the Restaurant model
const Restaurant = model("Restaurant", restaurantSchema);

export default Restaurant; // Export the Restaurant model
