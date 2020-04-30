import {createTypes} from 'utils/core'
import action from './action'
import error from './error'
import cargo from './cargo'
import toast from './toast'

const types = [
  ...action,
  ...error,
  ...cargo,
  ...toast,
]

export default createTypes([...new Set(types)])
