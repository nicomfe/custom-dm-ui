/* eslint-disable import/no-extraneous-dependencies */
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import configureStore from './store/configureStore'

require('babel-polyfill')

const store = configureStore()

const rootEl = document.getElementById('app')
ReactDOM.render(
  <Provider store={store}>
    <AppContainer>
      <App />
    </AppContainer>
  </Provider>,
  rootEl
)

if (module.hot) {
  module.hot.accept('./App', () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <App /> here rather than require() a <NextApp />.
    // eslint-disable-next-line global-require
    const NextApp = require('./App').default

    ReactDOM.render(
      <Provider store={store}>
        <AppContainer>
          <NextApp />
        </AppContainer>
      </Provider>,
      rootEl
    )
  })
}
