import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import setupStore from 'utils/store'
import WebFontLoader from 'webfontloader'
import {BrowserRouter} from 'react-router-dom'
import {renderRoutes} from 'react-router-config'
import Routes from 'Routes'
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
    <BrowserRouter>
      {renderRoutes(Routes)}
    </BrowserRouter>
  </Provider>, document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
