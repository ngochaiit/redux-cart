import React, { Component } from 'react';

import {connect} from 'react-redux';
import Products from '../../components/Products';
import Product from '../../components/Product';
import PropTypes from 'prop-types';
import {actAddToCart, changeMessage} from '../../redux/actions/index'
class ProductsContainer extends Component {
  render() {
      var {products} = this.props;
    
    return (
    
        <Products>{this.showProducts(products)}</Products>
       
   
    );
  }

  showProducts(products)
{
    let result = null;
    let {onAddToCart, onChangeMessage} = this.props;
    
   
    if(products.length > 0)
    {
       
        result = products.map((product, index) =>
    {
        return  <Product key ={index} product = {product} onAddToCart = {onAddToCart} onChangeMessage = {onChangeMessage}
        />
    })
    }
    return result;
}

}



const mapStateToProps = state =>
{
    return {
        products : state.listSanPham
    }
}


const mapDispatchToProps = (dispatch, props) =>
{
    return{
        onAddToCart: (product) =>
        {
            dispatch(actAddToCart(product, 1));
        },
        onChangeMessage: (message) =>
        {
            dispatch(changeMessage(message));
        }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
 