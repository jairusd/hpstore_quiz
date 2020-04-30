import actionTypes from '../types'

const {
  ADD_TOAST,
} = actionTypes

export const AddToast = payload => ({
  payload,
  type: ADD_TOAST,
})
