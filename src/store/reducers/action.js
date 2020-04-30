import {handleState} from 'utils/core'

const INITIAL_STATE = {
  fetching: false,
}

const handlers = {
  ERROR: state => ({...state, fetching: false}),
  PENDING: state => ({...state, fetching: true}),
  SUCCESS: state => ({...state, fetching: false}),
}

export default (state = INITIAL_STATE, action) => handleState(state, action, handlers)
