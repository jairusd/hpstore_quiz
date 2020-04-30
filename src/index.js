import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import setupStore from 'utils/store'
import WebFontLoader from 'webfontloader'
import App from 'components/App'
import './styles/index.scss'
import * as serviceWorker from './serviceWorker'

const store = setupStore()

WebFontLoader.load({
  google: {
    families: ['Roboto:300,400,500,700', 'Material Icons'],
  },
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
