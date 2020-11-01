import { 
  TRANSACTION_DEPOSIT_REQUEST,
  TRANSACTION_DEPOSIT_SUCCESS,
  TRANSACTION_DEPOSIT_FAIL,
  TRANSACTION_DEPOSIT_RESET,
  TRANSACTION_WITHDRAWAL_REQUEST,
  TRANSACTION_WITHDRAWAL_SUCCESS,
  TRANSACTION_WITHDRAWAL_FAIL,
  TRANSACTION_WITHDRAWAL_RESET
} from '../constants/transactionConstants'

export const transactionDepositReducer = (state = {}, action) => {
  switch (action.type) {
    case TRANSACTION_DEPOSIT_REQUEST:
      return { loading: true }

    case TRANSACTION_DEPOSIT_SUCCESS:
      return { loading: false, success: true, userInfo: action.payload }

    case TRANSACTION_DEPOSIT_FAIL:
      return { loading: false, error: action.payload }

    case TRANSACTION_DEPOSIT_RESET:
      return  {}
  
    default:
      return state
  }
}

export const transactionWithdrawalReducer = (state = {}, action) => {
  switch (action.type) {
    case TRANSACTION_WITHDRAWAL_REQUEST:
      return { loading: true }

    case TRANSACTION_WITHDRAWAL_SUCCESS:
      return { loading: false, success: true, userInfo: action.payload }

    case TRANSACTION_WITHDRAWAL_FAIL:
      return { loading: false, error: action.payload }

    case TRANSACTION_WITHDRAWAL_RESET:
      return  {}
  
    default:
      return state
  }
}