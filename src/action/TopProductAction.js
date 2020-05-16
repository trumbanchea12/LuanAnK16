import * as types from '../constants/ActionType';
import callApi from '../network/apiCaller';

export const actFetchTopProductsRequest = () => {
    return (dispatch) => {
        return callApi('toppr', 'GET', null).then(res => {
            dispatch(actFetchTopProducts(res.data.top))
        });
    };
}

export const actFetchTopProducts = (item) => {
    return {
        type : types.FETCH_TOP_PRODUCT,
        item
    }
}