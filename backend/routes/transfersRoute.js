import express from 'express'
const {
  transfer,
  transferOut
} = require('../controllers/transferController');

const router = express.Router();

const {
  protect
} = require('../middleware/auth');

router.use(protect);

router.post('/', transfer);
router.post('/out', transferOut);
  
export default router