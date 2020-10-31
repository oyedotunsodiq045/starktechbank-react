import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { userLoginReducer, userRegisterReducer, userDetailsReducer, userUpdateProfileReducer, userChangePasswordReducer } from './reducers/userReducers'
import { transactionDepositReducer, transactionWithdrawalReducer } from './reducers/transactionReducers'

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  userChangePassword: userChangePasswordReducer,
  transactionDeposit: transactionDepositReducer,
  transactionWithdrawal: transactionWithdrawalReducer
})

const userInfoFromStorage = localStorage.getItem('userInfo')
? JSON.parse(localStorage.getItem('userInfo'))
: null

const initialState = {
  userLogin: { userInfo: userInfoFromStorage }
}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store