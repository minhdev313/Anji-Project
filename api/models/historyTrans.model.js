import mongoose from 'mongoose';

const historyOfTransactionsSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User' // Reference the 'User' model for relationships
  },
  created_at: {
    type: Date,
    default: Date.now, // Set default creation time to current timestamp
    immutable: true // Prevent modification after creation
  },
  // Consider alternatives for "required_at"
  requested_at: { // Optional: Date/time when transaction is requested/initiated
    type: Date,
    default: null // Allow null for cases where a request time is not applicable
  },
  transaction_details: { // Embedded object for detailed information
    type: {
      type: String,
      enum: ['Payment', 'Refund', 'Cancellation'] // Specify valid transaction types
    },
    amount: {
      type: Number,
      required: true,
      min: 0 // Set minimum amount to prevent negative values
    },
    currency: {
      type: String,
      default: 'USD' // Set default currency, adjust if needed
    },
    // Additional details you might want to include:
    payment_method: { type: String }, // e.g., "Credit Card", "Wallet"
    order_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Order' } // Reference the 'Order' model (optional)
    // ... other relevant data
  },
  // Additional fields you might want to include:
  processed_at: { type: Date }, // Date/time of transaction completion (optional)
  status: { type: String, enum: ['Pending', 'Completed', 'Failed'] } // Optional transaction status
}, { timestamps: false }); // Don't add default timestamps, we have `created_at`

const HistoryOfTransactions = mongoose.model('HistoryOfTransactions', historyOfTransactionsSchema);

export default HistoryOfTransactions;
