import * as types from '../constants/ActionType';
var initialState = [];

const products = (state = initialState, action) => {
   switch (action.type) {
      case types.FETCH_TOP_PRODUCT: 
         state = action.item;
         return [...state];
      default: return [...state];
   }
}

export default products;