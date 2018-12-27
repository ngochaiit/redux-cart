import {combineReducers} from  'redux';
import products from './products';
import cart from './cart';
import message from './message';

const appReducers = combineReducers(
    {
        listSanPham : products,
        GioHang : cart,
        TinNhan : message,
    }
)
export default appReducers;