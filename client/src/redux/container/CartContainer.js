import React, { Component } from 'react';

import {connect} from 'react-redux';
import Cart from '../../components/Cart';
import CartItem from '../../components/CartItem';
import * as Message from '../constant/Message';
import CartResult from '../../components/CartResult';

import { actRemoveProductInCart, changeMessage,actUpdateProductInCart, actMinusProductInCart } from '../actions/index';

class CartContainer extends Component {
  render() {
          var {cart} = this.props;
          
          
          
;    return (
    
       <Cart>{this.showCartItem(cart)}
       {this.showTotalMoney(cart)}</Cart>
   
    );
  }

  showCartItem = (cart) =>
  {
    let {onDeleteProduct, onChangeMessage, onUpdateProductInCart, onMinusProductInCart} = this.props;
    console.log(onDeleteProduct);
    let result = <tr><td>{Message.MSG_CART_EMPTY}</td></tr>;
    if(cart.length > 0)
    {
      result = cart.map((item,index) =>
    {
      return (
         <CartItem key = {index} item = {item}
         onDeleteProduct = {onDeleteProduct}
         onChangeMessage = {onChangeMessage}
         onUpdateProductInCart = {onUpdateProductInCart}
         onMinusProductInCart = {onMinusProductInCart}></CartItem>
      );
    })
    }
    return result;
  }

  showTotalMoney = (cart) =>
  {
    
    if(cart.length > 0)
    {
     return  <CartResult cart = {cart}/>
    }
    
  }
}

// CartContainer.PropTypes = 
// {
//     cart : PropTypes.arrayOf(
//         PropTypes.shape(
//             {
//                 product : PropTypes.shape({}).isRequired,
//         quantity:  PropTypes.number.isRequired
//             }
//         )
//     ).isRequired
// }



const mapStateToProps = state =>
{
    return {
        cart : state.GioHang
    }
}

const mapDispatchToProps = (dispatch, props) =>
{
  return {
    onDeleteProduct: (product) =>
    {
      dispatch(actRemoveProductInCart(product));
    },
    onChangeMessage: (message) => {
      dispatch(changeMessage(message))
    },

    onUpdateProductInCart : (product, quantity) =>
    {
      dispatch(actUpdateProductInCart(product, quantity));
    },
    onMinusProductInCart : (product,quantity) =>
    {
      dispatch(actMinusProductInCart(product,quantity));
    }

  
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
 