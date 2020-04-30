import actionTypes from '../types'

const {
  PENDING,
  ERROR,
  SUCCESS,
} = actionTypes

export const ActionStart = (action) => ({
  type: action ? `${action}__${PENDING}` : PENDING,
})

export const ActionError = (action, error) => ({
  payload: error,
  type: action ? `${action}__${ERROR}` : ERROR,
})

export const ActionSuccess = (action, result) => ({
  payload: result,
  type: action ? `${action}__${SUCCESS}` : SUCCESS,
})
