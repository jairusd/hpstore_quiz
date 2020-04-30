import {combineReducers} from 'redux'
import action from './action'
import error from './error'
import cargo from './cargo'
import toast from './toast'

export default combineReducers({
  action,
  cargo,
  error,
  toast,
})
