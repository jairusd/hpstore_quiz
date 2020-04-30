import {handleState} from 'utils/core'

const INITIAL_STATE = {
  data: null,
  status: false,
}

const handlers = {
  ERROR: (state, payload) => ({...state, data: payload, status: false}),
  PENDING: (state, payload) => ({...state, data: null, status: true}),
  SUCCESS: (state, payload) => ({...state, data: payload, status: false}),
}

export default (state = INITIAL_STATE, action) => handleState(state, action, handlers)
