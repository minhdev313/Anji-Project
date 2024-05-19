import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
    trim: true // Optional: Remove leading/trailing whitespace
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true // Optional: Remove leading/trailing whitespace
  },
  password: {
    type: String,
    required: true
  },
  googleId: {
    type: String,
    unique: true // Optional: Make unique if applicable
  },
  level: {
    type: String,
    enum: ['Standard', 'Premium'], // Enforce valid levels
    default: 'Standard' // Set default level
  },
  profilePicture: {
    type: String,
    default: 'https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg'
  },
  favorites: {
    type: [mongoose.Schema.Types.ObjectId], // Use Mongoose's ObjectId type
    ref: 'Dish' // Reference the 'Dish' model for relationships (optional)
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

const User = mongoose.model('User', userSchema);

export default User;
