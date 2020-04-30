export function handleState(state, {payload, type: actionType}, handlers) {
  if (!handlers[actionType]) {
    return state
  }
  return handlers[actionType](state, payload)
}

export function createTypes(arr) {
  return arr.reduce((obj, key) => ({...obj, [key]: key.toUpperCase()}), {})
}

export function hasKey(object, key) {
  return Object.prototype.hasOwnProperty.call(object, key)
}

export function addPending(action, key) {
  return {
    [`${action}__PENDING`]: (state, payload) => ({...state, [`fetching${key}`]: true}),
    [`${action}__ERROR`]: (state, payload) => ({...state, [`fetching${key}`]: false}),
    [`${action}__SUCCESS`]: (state, payload) => ({...state, [`fetching${key}`]: false}),
  }
}
