export const ADD_ITEM_REQUEST = 'ADD_ITEM_REQUEST'
export const ADD_ITEM_SUCCESS = 'ADD_ITEM_SUCCESS'

export const addItem = (item) => {
  return (dispatch) => {
    dispatch(addItemRequest(item))
    setTimeout(() => {
      // 2 seconds later we dispatch add item success
      dispatch(addItemSuccess())
    }, 2000)
  }
}
export const addItemRequest = item => ({
  type: ADD_ITEM_REQUEST,
  payload: { ...item },
})

export const addItemSuccess = () => ({
  type: ADD_ITEM_SUCCESS,
})
