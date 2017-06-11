import Immutable from 'immutable'
import { createReducer } from 'redux-immutablejs'

import { ADD_ITEM_REQUEST, ADD_ITEM_SUCCESS } from '../actions/list'

const initialState = Immutable.fromJS({
  quantity: 1,
  list: [{
    id: 0,
    firstName: 'Jose',
    lastName: 'Perez',
  }],
  isSaving: false,
})

export default createReducer(initialState, {
  [ADD_ITEM_REQUEST]: (state, action) => {
    const newItem = Immutable.fromJS({
      id: state.get('quantity'),
      firstName: action.payload.firstName,
      lastName: action.payload.lastName,
    })
    return state
      .set('list', state.get('list').push(newItem))
      .set('quantity', state.get('quantity') + 1)
      .set('isSaving', true)
  },
  [ADD_ITEM_SUCCESS]: (state) => {
    return state.set('isSaving', false)
  },
})
