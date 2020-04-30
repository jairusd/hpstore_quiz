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

export function addPending(action) {
  return {
    [`${action}::PENDING`]: (state, payload) => ({...state, fetching: true}),
    [`${action}::ERROR`]: (state, payload) => ({...state, fetching: false}),
    [`${action}::SUCCESS`]: (state, payload) => ({...state, fetching: false}),
  }
}
