import * as types from '../constants/ActionType';

export const actAddToCart = (item) => {
    return {
        type: types.ADD_TO_CART,
        item
    }
}

export const actRemoveFromCart = (item) => {
    return {
        type: types.REMOVE_FROM_CART,
        item
    }
}

export const actUpQuantityCart = (item) => {
    return {
        type: types.UP_QUANTITY_CART,
        item
    }
}

export const actDownQuantityCart = (item) => {
    return {
        type: types.DOWN_QUANTITY_CART,
        item
    }
}