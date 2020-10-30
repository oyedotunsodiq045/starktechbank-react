import express from 'express'
import SavingsAccount from '../models/savingsAccountModel.js'
import asyncHandler from 'express-async-handler'
// import {
//   getRecipients,
//   getRecipient,
//   createRecipient,
//   updateRecipient,
//   deleteRecipient
// } from '../controllers/recipientController'

const router = express.Router()

// import {
//   protect
// } from '../middleware/auth'

// router.use(protect);

router.get('/', asyncHandler(async(req, res, next) => {
  const savingsAccounts = await SavingsAccount.find({})
  res.json(savingsAccounts)
}))

router.get('/:id', asyncHandler(async(req, res, next) => {
  // const recipient = recipients.find((recipient) => recipient._id === req.params.id)
  const savingsAccount = await SavingsAccount.findById(req.params.id)

  if (savingsAccount) {
    res.json(savingsAccount)
  } else {
    res.status(404)
    throw new Error('SavingsAccount not found')
  }
}))

// router
//   .route('/')
//   .get(getRecipients)
//   .post(createRecipient);

// router
//   .route('/:id')
//   .get(getRecipient)
//   .put(updateRecipient)
//   .delete(deleteRecipient);

export default router