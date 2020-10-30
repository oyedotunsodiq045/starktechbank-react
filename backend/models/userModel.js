import crypto from 'crypto'
import mongoose from 'mongoose'
const Schema = mongoose.Schema;
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const userSchema = new Schema({
  username: {
    type: String,
    trim: true,
    required: [true, 'Please add a username'],
    unique: [true, 'Username is already taken']
  },
  firstname: {
    type: String,
    trim: true,
    required: [true, 'Please add a firstname']
  },
  lastname: {
    type: String,
    trim: true,
    required: [true, 'Please add a lastname']
  },
  email: {
    type: String,
    trim: true,
    required: [true, 'Please add an email'],
    unique: [true, 'Email is already registered'],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please add a valid email',
    ],
  },
  phone: {
    type: String,
    trim: true,
    maxlength: [20, 'Phone number can not be longer than 20 characters'],
  },
  role: {
    type: String,
    trim: true,
    enum: ['user', 'marketer', 'account', 'audit', 'legal'],
    default: 'user',
  },
  password: {
    type: String,
    required: [true, 'Please add a password'],
    minlength: 6,
    select: false, // what this will do is when we get a user through our API it's not going to show the password
  },
  isEnabled: {
    type: Boolean,
    default: true,
  },
  primaryAccountId: {
    type: mongoose.Schema.ObjectId,
    ref: 'PrimaryAccount',
    // required: true
  },
  savingsAccountId: {
    type: mongoose.Schema.ObjectId,
    ref: 'SavingsAccount',
    // required: true
  },
  resetPasswordToken: String,
  resetPasswordExpire: String,
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
  },
  toObject: {
    virtuals: true,
  },
});

// Encrypt password using bcrypt
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// Sign JWT and return
userSchema.methods.getSignedJwtToken = function () {
  return jwt.sign({
      id: this._id,
    },
    process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRE,
    }
  );
};

// Match user entered password to hashed password in database
userSchema.methods.matchPassword = async function (enterdPassword) {
  return await bcrypt.compare(enterdPassword, this.password);
};

// Generate and hash password token
userSchema.methods.getResetPasswordToken = function () {
  // Generate token
  const resetToken = crypto.randomBytes(20).toString('hex');

  // Hash token and set to resetPasswordToken field
  this.resetPasswordToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex');

  // Set expire
  this.resetPasswordExpire = Date.now() + 10 * 60 * 1000;

  return resetToken;
};

// Reverse populate with virtuals
userSchema.virtual('primaryAccount', {
  ref: 'PrimaryAccount',
  localField: '_id',
  foreignField: 'userRef',
  justOne: false,
});

// Reverse populate with virtuals
userSchema.virtual('savingsAccount', {
  ref: 'SavingsAccount',
  localField: '_id',
  foreignField: 'userRef',
  justOne: false,
});

// Reverse populate with virtuals
userSchema.virtual('appointments', {
  ref: 'Appointment',
  localField: '_id',
  foreignField: 'userRef',
  justOne: false,
});

// Reverse populate with virtuals
userSchema.virtual('recipients', {
  ref: 'Recipient',
  localField: '_id',
  foreignField: 'userRef',
  justOne: false,
});

const User = mongoose.model('User', userSchema);

export default User