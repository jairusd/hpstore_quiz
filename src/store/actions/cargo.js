import actionTypes from '../types'

const {
  FETCH_CARGOES,
  REQUESTED,
  RESET_CARGOES,
} = actionTypes

export const FetchCargoes = query => ({
  payload: query,
  type: `${FETCH_CARGOES}__${REQUESTED}`,
})

export const ResetCargoes = () => ({
  type: RESET_CARGOES,
})
