import { Schema, model } from "mongoose"; // Import required classes

const dishSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true, // Optional: Remove leading/trailing whitespace
    },
    description: {
      type: String,
      trim: true, // Optional: Remove leading/trailing whitespace
    },
    price: {
      type: Number,
      required: true,
      min: 0, // Optional: Set a minimum price if applicable
    },
    category_id: {
      type: [Schema.Types.ObjectId],
      required: true,
      ref: "Category", // Reference the 'Category' model for relationships
    },
    image: {
      type: String,
      default:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpjVJ95QK9Z7ppeuEptxKb-QhLhdKkx6XbzuVd90YuJaJavpvQ2qTxDDpkH95m4A3Jbj8&usqp=CAU",
    },
    ingredients: {
      type: [String], // Array of ingredient strings
    },
    restaurant_id: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Restaurant", // Reference the 'Restaurant' model for relationships
    },
    is_available: {
      type: Boolean,
      default: true, // Optional: Set default availability to true
    },
  },
  { timestamps: true }
); // Enable automatic timestamps updates

// Create the Dish model
const Dish = model("Dish", dishSchema);

export default Dish; // Export the Dish model
