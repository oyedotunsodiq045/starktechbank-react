import express from 'express'
import PrimaryAccount from '../models/primaryAccountModel.js'
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
  const primaryAccounts = await PrimaryAccount.find({})
  res.json(primaryAccounts)
}))

router.get('/:id', asyncHandler(async(req, res, next) => {
  // const recipient = recipients.find((recipient) => recipient._id === req.params.id)
  const primaryAccount = await PrimaryAccount.findById(req.params.id)

  if (primaryAccount) {
    res.json(primaryAccount)
  } else {
    res.status(404)
    throw new Error('PrimaryAccount not found')
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