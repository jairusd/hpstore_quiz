import actionTypes from '../types'

const {
  FETCH_AUTOCOMPLETE_CARGOES,
  FETCH_CARGOES,
  FETCH_CARGO,
  REQUESTED,
} = actionTypes

export const FetchCargoes = query => ({
  payload: query,
  type: `${FETCH_CARGOES}__${REQUESTED}`,
})

export const FetchCargo = query => ({
  payload: query,
  type: `${FETCH_CARGO}__${REQUESTED}`,
})

export const FetchAutocompleteCargoes = query => ({
  payload: query,
  type: `${FETCH_AUTOCOMPLETE_CARGOES}__${REQUESTED}`,
})
