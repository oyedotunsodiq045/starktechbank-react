import mongoose from 'mongoose'
import colors from 'colors'
import dotenv from 'dotenv'
import users from './data/users.js'
import primaryaccounts from './data/primaryaccounts.js'
import savingsaccounts from './data/savingsaccounts.js'
import primarytransactions from './data/primarytransactions.js'
import savingstransactions from './data/savingstransactions.js'
import recipients from './data/recipients.js'
import User from './models/userModel.js'
import PrimaryAccount from './models/primaryAccountModel.js'
import SavingsAccount from './models/savingsAccountModel.js'
import PrimaryTransaction from './models/primaryTransactionModel.js'
import SavingsTransaction from './models/savingsTransactionModel.js'
import Recipient from './models/recipientModel.js'
import connectDB from './config/db.js'

// Load env vars
dotenv.config()

// Connect to DB
connectDB()

// Import into DB
const importData = async () => {
  try {
    await User.deleteMany();
    await PrimaryAccount.deleteMany();
    await SavingsAccount.deleteMany();
    await PrimaryTransaction.deleteMany();
    await SavingsTransaction.deleteMany();
    await Recipient.deleteMany();

    await User.create(users);
    await PrimaryAccount.create(primaryaccounts);
    await SavingsAccount.create(savingsaccounts);
    await PrimaryTransaction.create(primarytransactions);
    await SavingsTransaction.create(savingstransactions);
    await Recipient.create(recipients);

    console.log('Data Imported...'.green.inverse);
    process.exit();
  } catch (err) {
    console.error(`${err}`.red.inverse);
  }
};

// Destroy data
const destroyData = async () => {
  try {
    await User.deleteMany();
    await PrimaryAccount.deleteMany();
    await SavingsAccount.deleteMany();
    await PrimaryTransaction.deleteMany();
    await SavingsTransaction.deleteMany();
    await Recipient.deleteMany();

    console.log('Data Destroyed...'.red.inverse);
    process.exit();
  } catch (err) {
    console.error(err);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}