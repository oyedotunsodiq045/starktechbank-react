import axios from 'axios'
import {
  TRANSACTION_DEPOSIT_REQUEST,
  TRANSACTION_DEPOSIT_SUCCESS,
  TRANSACTION_DEPOSIT_FAIL,
  // TRANSACTION_DEPOSIT_RESET,
  TRANSACTION_WITHDRAWAL_REQUEST,
  TRANSACTION_WITHDRAWAL_SUCCESS,
  TRANSACTION_WITHDRAWAL_FAIL,
  // TRANSACTION_WITHDRAWAL_RESET
} from '../constants/transactionConstants'

export const deposit = (type, amount) => async (dispatch, getState) => {
  try {
    dispatch({ type: TRANSACTION_DEPOSIT_REQUEST })

    const { userLogin: { userInfo } } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`
      }
    }
    
    await axios.post(`/api/transactions/deposit`, { type, amount }, config)

    dispatch({ 
      type: TRANSACTION_DEPOSIT_SUCCESS
    })

  } catch (error) {
    dispatch({ 
      type: TRANSACTION_DEPOSIT_FAIL,
      payload: 
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const withdraw = (type, amount) => async (dispatch, getState) => {
  try {
    dispatch({ type: TRANSACTION_WITHDRAWAL_REQUEST })

    const { userLogin: { userInfo } } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`
      }
    }
    
    await axios.post(`/api/transactions/withdrawal`, { type, amount }, config)

    dispatch({ 
      type: TRANSACTION_WITHDRAWAL_SUCCESS
    })

  } catch (error) {
    dispatch({ 
      type: TRANSACTION_WITHDRAWAL_FAIL,
      payload: 
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}