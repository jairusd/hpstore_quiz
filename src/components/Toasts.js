import React, {useState, useEffect} from 'react'
import {Snackbar} from 'react-md'

export default function Toasts({toast, delay, autoDismiss}) {
  const [toasts, setToasts] = useState([])

  useEffect(() => {
    if (toast?.text) {
      setToasts(t => [...t, toast])
    }
  }, [toast])

  const doDismissToast = () => {
    setToasts((t) => {
      const [, ...newToasts] = t
      return newToasts
    })
  }

  return (
    <Snackbar
      id="example-snackbar"
      toasts={toasts}
      autohide={autoDismiss}
      onDismiss={doDismissToast}
      className={`toast toast--${toasts[0]?.type}`}
    />
  )
}
