import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const primaryAccountSchema = new Schema({
  primaryAccountNumber: {
    type: Number,
    required: [true, 'Please add an account number'],
    unique: true,
  },
  accountBalance: {
    type: Number,
    required: [true, 'Please add an account balance'],
  },
  userRef: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
}, {
  timestamps: true,
  toJSON: {
    virtuals: true
  },
  toObject: {
    virtuals: true
  }
});

const PrimaryAccount = mongoose.model('PrimaryAccount', primaryAccountSchema);

export default PrimaryAccount