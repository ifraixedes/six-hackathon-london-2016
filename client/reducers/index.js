
import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
import stocks from './stocks'

export default combineReducers({
  routing,
  stocks
})
