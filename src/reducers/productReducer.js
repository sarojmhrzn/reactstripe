import * as types from '../actions/actionTypes';
import initialState from './initialState';

export const listProduct = (state=initialState.products, action) => {
    if(action.type === types.LIST_PRODUCT) {
      const payload = action.payload
      let products = { data: payload.data, has_more: payload.has_more}
      const data = products.data
      if(data.length) {
        products['starting_after'] = data[0].id
        products['ending_before'] = data[data.length-1].id
      }
      else {
        products['starting_after'] = ''
        products['ending_before'] = ''
      }
      return Object.assign({}, state, products)
    }
    else {
      return state
    }
}