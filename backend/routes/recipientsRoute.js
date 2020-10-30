import express from 'express'
import Recipient from '../models/recipientModel.js'
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
  const recipients = await Recipient.find({})
  res.json(recipients)
}))

router.get('/:id', asyncHandler(async(req, res, next) => {
  // const recipient = recipients.find((recipient) => recipient._id === req.params.id)
  const recipient = await Recipient.findById(req.params.id)

  if (recipient) {
    res.json(recipient)
  } else {
    res.status(404)
    throw new Error('Recipient not found')
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