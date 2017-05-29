import { handleActions, createAction } from 'redux-actions'
import { browserHistory } from 'react-router'
import axios from 'axios'

// Constants
const LOGIN_REQUEST = 'Auth/LOGIN_REQUEST'
const LOGIN_SUCCESS = 'Auth/LOGIN_SUCCESS'
const LOGIN_FAILURE = 'Auth/LOGIN_FAILURE'

// Actions
const loginRequest = createAction(LOGIN_REQUEST)
const loginSuccess = createAction(LOGIN_SUCCESS)
const loginFailure = createAction(LOGIN_FAILURE)

// Thunks
export const login = (credentials) => (dispatch, getState) => {
  dispatch(loginRequest())
  axios.post('https://i2x-challenge.herokuapp.com/core/login/', {
    email: credentials.email,
    password: credentials.password
  })
  .then(result => {
    const token = result.data.token
    dispatch(loginSuccess())
    console.warn('Login success! Token: ', token)
  })
  .catch(error => {
    dispatch(loginFailure())
    console.warn('Login error! Wrong credentials.')
    console.error(error)
  })
}

// Reducer
const initialState = {
  isFetching: false,
  isAuthenticated: !!localStorage.getItem('token')
}

export const reducer = handleActions({
  [LOGIN_REQUEST]: (state, action) => ({
    ...state,
    isFetching: true
  }),

  [LOGIN_SUCCESS]: (state, action) => ({
    ...state,
    isAuthenticated: true,
    isFetching: false
  }),

  [LOGIN_FAILURE]: (state, action) => ({
    ...state,
    isAuthenticated: false,
    isFetching: false
  })
}, initialState)

export default reducer
