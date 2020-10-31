import express from 'express'
import {
  transfer,
  transferOut,
  deposit,
  withdraw
} from '../controllers/transactionController.js'

const router = express.Router()

import {
  protect
} from '../middleware/auth.js'

router.use(protect);

// Transfer - Between Accounts (Primary -> Savings and Vice Versa)
// /api/transactions/transfer
router.post('/transfer', transfer);

// Transfer - To Someone else
// /api/transactions/transfer/out
router.post('/transfer/out', transferOut);

// Deposit v3
// /api/transactions/deposit
router.post('/deposit', deposit);

// Withdraw v3
// /api/transactions/withdrawal
router.post('/withdrawal', withdraw);
  
export default router