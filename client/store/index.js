import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import auth from './auth'
import createResumeReducer from './createResume'
import fetchUserScoresReducer from './fetchUserScores'

const reducer = combineReducers({
  auth,
  createResume: createResumeReducer,
  fetchUserScores: fetchUserScoresReducer
})

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './auth'
