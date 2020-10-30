import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const primaryTransactionSchema = new Schema({
  description: {
    type: String,
    required: [true, 'Please add a description'],
    maxlength: [500, 'Description can not be more than 500 characters'],
  },
  type: {
    type: String,
    enum: ['Primary', 'Savings'],
    default: 'Primary',
  },
  status: {
    type: String,
    enum: ['Complete', 'Incomplete'],
    default: 'Incomplete',
  },
  amount: {
    type: Number,
    required: [true, 'Please add an amount'],
  },
  availableBalance: {
    type: Number,
  },
  userRef: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  primaryAccountId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'PrimaryAccount',
    // required: true
  },
  date: {
    type: Date,
    default: Date.now,
  },
}, {
  timestamps: true
});

const PrimaryTransaction = mongoose.model('PrimaryTransaction', primaryTransactionSchema);

export default PrimaryTransaction