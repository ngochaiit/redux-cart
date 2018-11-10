import * as types from '../constant/ActionTypes';

export const actAddToCart = (product, quantity) =>
{
    return {
        type: types.ADD_TO_CART,
        SanPham : product,
        SoLuong: quantity
    }
}

export const changeMessage = (message) =>
{
    return {
        type: types.CHANGE_MESSAGE,
        ThongBao : message
    }
}

export const actRemoveProductInCart = (product) =>
{
    return {
        type: types.DELETE_PRODUCT,
        SanPham: product,
    }
}

export const actUpdateProductInCart = (product, quantity) =>
{
 return  {
     type: types.UPDATE_PRODUCT_IN_CART,
     SanPham : product,
     SoLuong : quantity

 }
 
}

export const actMinusProductInCart = (product,quantity) =>
{
    return {
        type: types.MINUS_PRODUCT_IN_CART,
        SanPham : product,
        SoLuong : quantity
    }
}