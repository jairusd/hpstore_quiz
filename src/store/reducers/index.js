import {combineReducers} from 'redux'
import action from './action'
import error from './error'
import cargo from './cargo'

export default combineReducers({
  action,
  error,
  cargo,
})
