import mongoose from 'mongoose';

const historyOfRandomSchema = new mongoose.Schema({
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
}, { timestamps: false }); // Don't add default timestamps, we have `created_at`

const HistoryOfRandom = mongoose.model('HistoryOfRandom', historyOfRandomSchema);

export default HistoryOfRandom;
