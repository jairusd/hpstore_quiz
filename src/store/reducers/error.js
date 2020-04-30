import {handleState} from 'utils/core'

const INITIAL_STATE = {
  data: null,
}

const handlers = {
  ERROR: (state, payload) => ({...state, data: payload}),
  ERROR_401: (state, payload) => ({...state, data: payload}),
}

export default (state = INITIAL_STATE, action) => handleState(state, action, handlers)
