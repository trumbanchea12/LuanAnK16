
import * as types from './../constants/ActionType';

var initialState = [];

const cart = (state = initialState, action) => {
   switch (action.type) {
      case types.ADD_TO_CART:
         console.log('ADD_TO_CART_SUCCESS state', state);
         var gioHang = {
            "id": action.item.id,
            "name": action.item.sanpham_ten,
            "qty": 1,
            "price": action.item.gia_tien,
            "weight": 30000,
            "options": {
               "image": action.item.sanpham_anh,
               "donvitinh": "kg",
               "shop_id": action.item.shop_id,
               "lohang_id": action.item.lohang_id
            },
            "discount": 0,
            "tax": 5040,
            "subtotal": action.item.gia_tien

         }
         const huyhoang = [...state, action.product];
         var exists = false;
         const newState = state.map(item => {
            if (item.id === gioHang.id) {
               exists = true;
               return {
                  ...item,
                  // quantity: item.quantity + 1
                  qty: item.qty + 1,
                  subtotal: item.subtotal * item.qty
               }
            } else {
               return item
            }
         });
         if (exists) {
            return newState;
         } else {
            return [...state, gioHang];
         }
         console.log("Cart action" + JSON.stringify(huyhoang))
      case types.REMOVE_FROM_CART:
         const remaingList = [
            ...state.filter(i => i.id !== action.item.id)
         ];
         return remaingList;

      case types.UP_QUANTITY_CART:
         var exists = false;
         const upQuantity = state.map(item => {
            if (item.id === action.item.id) {
               exists = true;
               return {
                  ...item,
                  // quantity: item.quantity + 1
                  qty: item.qty + 1,
               }
            } else {
               return item;
            }
         });
         if (exists) {
            return upQuantity;
         }
         else {
            return [...state]
         }

      case types.DOWN_QUANTITY_CART:
         var exists = false;
         const downQuantity = state.map(item => {
            if (item.id === action.item.id) {
               exists = true;
               if (item.qty <= 1) {
                  return {
                     ...item,
                     // quantity: item.quantity + 1
                     qty: 1,
                  }
               } else {
                  return {
                     ...item,
                     // quantity: item.quantity + 1
                     qty: item.qty - 1,
                  }
               }
            }
            else {
               return item;
            }
         });
         if (exists) {
            return downQuantity;
         } else {
            return [...state];
         }

      default: return [...state];
   }
}

export default cart;