import { 
  PRIMARY_ACCOUNT_LIST_REQUEST, 
  PRIMARY_ACCOUNT_LIST_SUCCESS, 
  PRIMARY_ACCOUNT_LIST_FAIL, 
} from '../constants/primaryAccountConstants'

export const primaryAccountListReducer = (state = { primaryAccounts: [] }, action) => {
  switch (action.type) {
    case PRIMARY_ACCOUNT_LIST_REQUEST:
      return { loading: true, primaryAccounts: [] }

    case PRIMARY_ACCOUNT_LIST_SUCCESS:
      return { loading: false, primaryAccounts: action.payload }

    case PRIMARY_ACCOUNT_LIST_FAIL:
      return { loading: false, error: action.payload }
  
    default:
      return state
  }
}