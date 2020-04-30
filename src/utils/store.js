import {createStore, applyMiddleware, compose} from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducers from 'store/reducers'
import sagas from 'store/sagas'

export default function setupStore() {
  const sagaMiddleware = createSagaMiddleware()

  const preloadedState = window.STATE_FROM_SERVER
  delete window.STATE_FROM_SERVER

  const composeEnhancers = typeof window === 'object'
    && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    })
    : compose

  const enhancer = composeEnhancers(
    applyMiddleware(sagaMiddleware),
    // other store enhancers if any
  )

  const store = createStore(
    reducers,
    preloadedState,
    enhancer,
  )

  sagaMiddleware.run(sagas)

  return store
}
