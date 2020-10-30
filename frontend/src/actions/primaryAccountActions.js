import axios from 'axios'
import { 
  PRIMARY_ACCOUNT_LIST_REQUEST, 
  PRIMARY_ACCOUNT_LIST_SUCCESS, 
  PRIMARY_ACCOUNT_LIST_FAIL, 
} from '../constants/primaryAccountConstants'

export const listPrimaryAccounts = () => async (dispatch) => {
  try {
    dispatch({ type: PRIMARY_ACCOUNT_LIST_REQUEST })
    
    const { data } = await axios.get('/api/primary-accounts')

    dispatch({ 
      type: PRIMARY_ACCOUNT_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({ 
      type: PRIMARY_ACCOUNT_LIST_FAIL,
      payload: 
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}