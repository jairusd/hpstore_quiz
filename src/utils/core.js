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

export function upper(word) {
  return word.replace(/^\w/, c => c.toUpperCase())
}

export function addPending(action, key) {
  const stateKey = `fetching${upper(key)}`

  return {
    [`${action}__PENDING`]: (state, payload) => ({...state, [stateKey]: true}),
    [`${action}__ERROR`]: (state, payload) => ({...state, [stateKey]: false}),
    [`${action}__SUCCESS`]: (state, payload) => ({...state, [stateKey]: false}),
  }
}

export function calcCargoBays(boxes) {
  if (!boxes) return 0

  const payload = boxes
    .split(',')
    .map(e => e.trim())
    .reduce((acc, curr) => acc + parseInt(curr, 10), 0)

  return Math.ceil(payload / 10)
}
