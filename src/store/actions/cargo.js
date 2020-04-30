import actionTypes from '../types'

const {
  FETCH_AUTOCOMPLETE_CARGOES,
  FETCH_CARGOES,
  FETCH_CARGO,
  REQUESTED,
  UPDATE_CARGO,
  UPDATE_CARGO_FORM,
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

export const UpdateCargoForm = form => ({
  payload: form,
  type: UPDATE_CARGO_FORM,
})

export const UpdateCargo = form => ({
  payload: form,
  type: `${UPDATE_CARGO}__${REQUESTED}`,
})
