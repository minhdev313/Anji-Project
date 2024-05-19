import mongoose from 'mongoose';

const favouritesSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User' // Reference the 'User' model for relationships
  },
  dish_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Dish' // Reference the 'Dish' model for relationships
  },
  notes: { type: String }, // Optional: User's notes about the favorite dish
  rating: { type: Number, min: 1, max: 5 } // Optional: User's rating for the dish (1-5)
}, { timestamps: false }); // Don't add default timestamps, we have `created_at`

const Favourites = mongoose.model('Favourites', favouritesSchema);

export default Favourites;
