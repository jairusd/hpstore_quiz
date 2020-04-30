import {useState, useEffect, useRef} from 'react'

export function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(
    () => {
      // Update debounced value after delay
      const handler = setTimeout(() => {
        setDebouncedValue(value)
      }, delay)

      return () => {
        clearTimeout(handler)
      }
    },
    [value, delay]
  )
  return debouncedValue
}

export function useDidUpdate(callback, deps) {
  const didMountRef = useRef(false)
  useEffect(() => {
    if (didMountRef.current) {
      callback()
    } else {
      didMountRef.current = true
    }
  }, deps)
}
