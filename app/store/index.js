import { applyMiddleware, compose, createStore, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import auth from 'modules/Auth'

// Add redux devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  combineReducers({ auth }),
  composeEnhancers(
    applyMiddleware(thunk)
  )
)

export default store
