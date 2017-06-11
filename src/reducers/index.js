import { combineReducers } from 'redux-immutablejs'
import { reducer as form } from 'redux-form/immutable'

import list from './list'

const rootReducer = combineReducers({
  form,
  list,
})

export default rootReducer
