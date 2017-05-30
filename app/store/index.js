import { applyMiddleware, compose, createStore, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import auth from 'modules/Auth'
import recordings from 'routes/Recordings/modules/RecordingsModule'

// Add redux devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  combineReducers({ auth, recordings }),
  composeEnhancers(
    applyMiddleware(thunk)
  )
)

export default store
