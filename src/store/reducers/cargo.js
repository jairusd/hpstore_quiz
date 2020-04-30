import {handleState} from 'utils/core'

const INITIAL_STATE = {
  cargoes: [],
  error: false,
  fetching: false,
}

const handlers = {
  FETCH_CARGOES: (state, payload) => ({...state, cargoes: payload}),
  FETCH_CARGOES__ERROR: state => ({
    ...state, cargoes: [], error: true, fetching: false,
  }),
  FETCH_CARGOES__PENDING: state => ({
    ...state, cargoes: [], error: false, fetching: true,
  }),
  FETCH_CARGOES__SUCCESS: state => ({
    ...state, error: false, fetching: false,
  }),
  RESET_CARGOES: state => ({...state, error: false}),
}

export default (state = INITIAL_STATE, action) => handleState(state, action, handlers)
