import {createTypes} from 'utils/core'
import action from './action'
import error from './error'
import cargo from './cargo'

const types = [
  ...action,
  ...error,
  ...cargo,
]

export default createTypes([...new Set(types)])
