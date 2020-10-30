import express from 'express'
const {
  deposit,
  withdraw
} = require('../controllers/savingsTransactionController');

const router = express.Router();

const {
  protect
} = require('../middleware/auth');

router.post('/deposit', protect, deposit);
router.post('/withdraw', protect, withdraw);

export default router;