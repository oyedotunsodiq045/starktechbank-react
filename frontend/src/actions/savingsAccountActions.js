import axios from 'axios'
import { 
  SAVINGS_ACCOUNT_LIST_REQUEST, 
  SAVINGS_ACCOUNT_LIST_SUCCESS, 
  SAVINGS_ACCOUNT_LIST_FAIL, 
} from '../constants/savingsAccountConstants'

export const listSavingsAccounts = () => async (dispatch) => {
  try {
    dispatch({ type: SAVINGS_ACCOUNT_LIST_REQUEST })
    
    const { data } = await axios.get('/api/savings-accounts')

    dispatch({ 
      type: SAVINGS_ACCOUNT_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({ 
      type: SAVINGS_ACCOUNT_LIST_FAIL,
      payload: 
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}