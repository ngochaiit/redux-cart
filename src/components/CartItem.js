import React, { Component } from 'react';
import * as Message from '../redux/constant/Message'

class App extends Component {
    
    constructor(props)
    {
        super(props);
        this.state = {
            quantity : 1,
        }
    }

  render() {
      let {item} = this.props;
     
     
    return (
       
            <tr>
        <th scope="row">
            <img src={item.product.image}
                alt="" className="img-fluid z-depth-0" />
        </th>
        <td>
            <h5>
                <strong>{item.product.name}</strong>
            </h5>
        </td>
        <td>{item.product.price}$</td>
        <td className="center-on-small-only">
            <span className="qty">{item.quantity} </span>
            <div className="btn-group radio-group" data-toggle="buttons">
                <label className="btn btn-sm btn-primary
                    btn-rounded waves-effect waves-light" onClick = {() => this.UpdateQuantity(item.product, item.quantity)}>
                    <a>+</a>
                </label>
                <label className="btn btn-sm btn-primary
                    btn-rounded waves-effect waves-light" onClick = {() => this.MinusUpdateQuantity(item.product, item.quantity)}>
                    <a>-</a>
                </label>
            </div>
        </td>
        <td>{this.showTotalPrice(item.product.price, item.quantity)}</td>
        <td>
            <button type="button" className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top"
                title="" data-original-title="Remove item"
                onClick = { () => this.onDelete(item.product) }>
                X
            </button>
        </td>
</tr>







    );
  }
  UpdateQuantity = (product, value) =>
  {
      

      if(value>=0)
      {
          console.log(value);
        this.props.onUpdateProductInCart(product,value);
        this.props.onChangeMessage(Message.MSG_UPDATE_CART_SUCCESS);
      }
     
      
  }
  MinusUpdateQuantity = (product, value) =>
  {
        
            if(value >0)
            {
                console.log(value);
                this.props.onMinusProductInCart(product, value);
                this.props.onChangeMessage(Message.MSG_UPDATE_CART_SUCCESS);
            }
        
  }


  onDelete =(product) =>
  {
      console.log(product);
      this.props.onDeleteProduct(product);
      this.props.onChangeMessage(Message.MSG_DELETE_PRODUCT_IN_CART_SUCCESS);
    
  }

  showTotalPrice = (price, quantity) =>
  {
      let result = null;
    return result = price * quantity;
  }
}

export default App;
