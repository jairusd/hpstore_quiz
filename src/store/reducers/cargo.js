import {handleState, addPending} from 'utils/core'

const INITIAL_STATE = {
  autocompleteCargoes: [],
  cargo: null,
  cargoes: [],
  fetchingAutocompleteCargoes: false,
}

const handlers = {
  FETCH_AUTOCOMPLETE_CARGOES: (state, payload) => ({...state, autocompleteCargoes: payload}),
  FETCH_CARGO: (state, payload) => ({...state, cargo: payload}),
  FETCH_CARGOES: (state, payload) => ({...state, cargoes: payload}),
  ...addPending('FETCH_AUTOCOMPLETE_CARGOES', 'autocompleteCargoes'),
}

export default (state = INITIAL_STATE, action) => handleState(state, action, handlers)
