import { handleActions, createAction } from 'redux-actions'
import axios from 'axios'

// Constants
const FETCH_RECORDING_REQUEST = 'Auth/FETCH_RECORDING_REQUEST'
const FETCH_RECORDING_SUCCESS = 'Auth/FETCH_RECORDING_SUCCESS'
const FETCH_RECORDING_FAILURE = 'Auth/FETCH_RECORDING_FAILURE'

// Actions
const fetchRecordingsRequest = createAction(FETCH_RECORDING_REQUEST)
const fetchRecordingsSuccess = createAction(FETCH_RECORDING_SUCCESS)
const fetchRecordingsFailure = createAction(FETCH_RECORDING_FAILURE)

// Thunks
export const fetchRecordings = () => (dispatch, getState) => {
  dispatch(fetchRecordingsRequest())

  if (!getState().auth.isAuthenticated) {
    return dispatch(fetchRecordingsFailure())
  }

  axios.get('https://i2x-challenge.herokuapp.com/ai/recording/list/', {
    headers: {
      Authorization: `JWT ${localStorage.getItem('token')}`
    }
  })
  .then(response => {
    const recordings = response.data.results.map((recording, id) => ({ ...recording, id }))
    dispatch(fetchRecordingsSuccess(recordings))
  })
  .catch(() => {
    dispatch(fetchRecordingsFailure())
  })
}

// Reducer
const initialState = {
  isFetching: false,
  recordings: []
}

export const reducer = handleActions({
  [FETCH_RECORDING_REQUEST]: (state, action) => ({
    ...state,
    isFetching: true
  }),

  [FETCH_RECORDING_SUCCESS]: (state, action) => ({
    ...state,
    isFetching: false,
    recordings: action.payload
  }),

  [FETCH_RECORDING_FAILURE]: (state, action) => ({
    ...state,
    isFetching: false
  })
}, initialState)

export default reducer
