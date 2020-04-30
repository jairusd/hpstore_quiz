import {handleState} from 'utils/core'

const INITIAL_STATE = {
  autocompleteCargoes: [],
  cargoes: [],
  error: false,
  fetching: false,
}

const handlers = {
  FETCH_AUTOCOMPLETE_CARGOES: (state, payload) => ({...state, autocompleteCargoes: payload}),
  FETCH_CARGOES: (state, payload) => ({...state, cargoes: payload}),
  RESET_CARGOES: state => ({...state, error: false}),
}

export default (state = INITIAL_STATE, action) => handleState(state, action, handlers)
