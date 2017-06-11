import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import Immutable from 'immutable'

import rootReducer from '../reducers'

function configureStore(initialState = {}) {
  const store = createStore(
    rootReducer,
    Immutable.fromJS(initialState),
    compose(
      applyMiddleware(
        thunk,
        createLogger({
          stateTransformer: (state) => {
            return state.toJS()
          },
          collapsed: () => {
            return true
          },
        }),
      ),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  )

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}

export default configureStore
