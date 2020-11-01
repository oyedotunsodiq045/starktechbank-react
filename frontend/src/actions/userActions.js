import axios from 'axios'
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_DETAILS_REQUEST, 
  USER_DETAILS_SUCCESS, 
  USER_DETAILS_FAIL, 
  USER_UPDATE_PROFILE_REQUEST, 
  USER_UPDATE_PROFILE_SUCCESS, 
  USER_UPDATE_PROFILE_FAIL, 
  // USER_UPDATE_PROFILE_RESET,
  USER_CHANGE_PASSWORD_REQUEST, 
  USER_CHANGE_PASSWORD_SUCCESS, 
  USER_CHANGE_PASSWORD_FAIL
} from '../constants/userConstants'

export const login = (username, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST })

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const { data } = await axios.post('/api/auth/login', { username, password }, config)

    dispatch({ 
      type: USER_LOGIN_SUCCESS,
      payload: data,
    })

    localStorage.setItem('userInfo', JSON.stringify(data))

  } catch (error) {
    dispatch({ 
      type: USER_LOGIN_FAIL,
      payload: 
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const logout = () => (dispatch) => {
  localStorage.removeItem('userInfo')
  dispatch({ type: USER_LOGOUT })
}

export const register = (username, firstname, lastname, email, phone, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_REGISTER_REQUEST })

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const { data } = await axios.post('/api/auth/register', { username, firstname, lastname, email, phone, password }, config)

    dispatch({ 
      type: USER_REGISTER_SUCCESS,
      payload: data,
    })

    dispatch({ 
      type: USER_LOGIN_SUCCESS,
      payload: data,
    })

    localStorage.setItem('userInfo', JSON.stringify(data))

  } catch (error) {
    dispatch({ 
      type: USER_REGISTER_FAIL,
      payload: 
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const getUserDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_DETAILS_REQUEST })

    const { userLogin: { userInfo } } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`
      }
    }

    const { data } = await axios.get(`/api/auth/${id}`, config)

    dispatch({ 
      type: USER_DETAILS_SUCCESS,
      payload: data,
    })

  } catch (error) {
    dispatch({ 
      type: USER_DETAILS_FAIL,
      payload: 
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const updateUserProfile = (user) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_UPDATE_PROFILE_REQUEST })

    const { userLogin: { userInfo } } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`
      }
    }

    const { data } = await axios.put(`/api/auth/updatedetails`, user, config)

    dispatch({ 
      type: USER_UPDATE_PROFILE_SUCCESS,
      payload: data,
    })

  } catch (error) {
    dispatch({ 
      type: USER_UPDATE_PROFILE_FAIL,
      payload: 
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const changeUserPassword = (user) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_CHANGE_PASSWORD_REQUEST })

    const { userLogin: { userInfo } } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`
      }
    }

    const { data } = await axios.put(`/api/auth/updatepassword`, user, config)

    dispatch({ 
      type: USER_CHANGE_PASSWORD_SUCCESS,
      payload: data,
    })

  } catch (error) {
    dispatch({ 
      type: USER_CHANGE_PASSWORD_FAIL,
      payload: 
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}