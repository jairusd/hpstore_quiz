import {handleState} from 'utils/core'

const INITIAL_STATE = {
  toast: null,
}

const handlers = {
  ADD_TOAST: (state, payload) => ({...state, toast: payload}),
  CLEAR_TOAST: state => ({...state, toast: null}),
}

export default (state = INITIAL_STATE, action) => handleState(state, action, handlers)
