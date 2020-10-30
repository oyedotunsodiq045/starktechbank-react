import { 
  SAVINGS_ACCOUNT_LIST_REQUEST, 
  SAVINGS_ACCOUNT_LIST_SUCCESS, 
  SAVINGS_ACCOUNT_LIST_FAIL, 
} from '../constants/savingsAccountConstants'

export const savingsAccountListReducer = (state = { savingsAccounts: [] }, action) => {
  switch (action.type) {
    case SAVINGS_ACCOUNT_LIST_REQUEST:
      return { loading: true, savingsAccounts: [] }

    case SAVINGS_ACCOUNT_LIST_SUCCESS:
      return { loading: false, savingsAccounts: action.payload }

    case SAVINGS_ACCOUNT_LIST_FAIL:
      return { loading: false, error: action.payload }
  
    default:
      return state
  }
}