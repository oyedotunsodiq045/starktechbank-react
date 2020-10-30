import express from 'express'
import User from '../models/userModel.js'
import asyncHandler from 'express-async-handler'
// import {
//   getThisMonthRegisteredUsers,
//   getThisWeekRegisteredUsers,
//   getTodayRegisteredUsers,
//   getMarketers,
//   getAccountants,
//   getAuditors,
//   getLegals,
//   getAdmins,
//   getUsers,
//   getUser,
//   createUser,
//   updateUser,
//   deleteUser,
// } from '../controllers/userController';

const router = express.Router()

// import User from '../models/User'

// const router = express.Router({
//   mergeParams: true
// });

// import advancedResults from '../middleware/advancedResults'
// import {
//   protect,
//   authorize
// } from '../middleware/auth'

// router.use(protect);
// router.use(authorize('admin'));

router.get('/', asyncHandler(async(req, res, next) => {
  const users = await User.find({})
  res.json(users)
}))

router.get('/:id', asyncHandler(async(req, res, next) => {
  // const recipient = recipients.find((recipient) => recipient._id === req.params.id)
  const user = await User.findById(req.params.id)

  if (user) {
    res.json(user)
  } else {
    res.status(404)
    throw new Error('User not found')
  }
}))

// router
//   .route('/month')
//   .get(getThisMonthRegisteredUsers);

// router
//   .route('/week')
//   .get(getThisWeekRegisteredUsers);

// router
//   .route('/today')
//   .get(getTodayRegisteredUsers);

// router
//   .route('/marketers')
//   .get(getMarketers);

// router
//   .route('/accountants')
//   .get(getAccountants);

// router
//   .route('/auditors')
//   .get(getAuditors);

// router
//   .route('/legals')
//   .get(getLegals);

// router
//   .route('/admins')
//   .get(getAdmins);

// router
//   .route('/')
//   .get(advancedResults(User, 'primaryAccount savingsAccount'), getUsers)
//   .post(createUser);

// router
//   .route('/:id')
//   .get(getUser)
//   .put(updateUser)
//   .delete(deleteUser);
  
export default router