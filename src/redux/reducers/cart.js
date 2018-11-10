import * as types from './../constant/ActionTypes'
 var data = JSON.parse(localStorage.getItem('CART'));
 var initialState = data ? data : [];


const cart = (state = initialState, action) =>
{
    var{SanPham, SoLuong} = action;
    var index = -1;
    
    switch(action.type)
    {
        case types.ADD_TO_CART :
        console.log(action);
        console.log(state);
        console.log(SanPham);
        console.log(SoLuong);
     index = findProductInCart(state, SanPham);
         if(index !== -1)
         {
         state[index].quantity += 1;
     }
         else
        {

        state.push(
            {
               product: SanPham,
                quantity: SoLuong
            }
        );
    }
    localStorage.setItem('CART', JSON.stringify(state));

        console.log(state);
        

        return [...state];

        case types.DELETE_PRODUCT:
        index = findProductInCart(state,SanPham);
        if(index !== -1)
        {
            state.splice(index,1);
        }

        localStorage.setItem('CART', JSON.stringify(state));

        console.log(state);


        case types.UPDATE_PRODUCT_IN_CART:
        index = findProductInCart(state,SanPham);
        if(index !== -1)
        {
            state[index].quantity += 2;
        }
        localStorage.setItem('CART', JSON.stringify(state));

        case types.MINUS_PRODUCT_IN_CART:
        index = findProductInCart(state,SanPham);
        if(index !== -1)
        {
            state[index].quantity -= 1;
        }
        localStorage.setItem('CART', JSON.stringify(state));
        
        default: return [...state];
    }
}

 let findProductInCart = (state, SanPham) =>
 {
     var index = -1;
      if(state.length > 0)
     {
         for(var i = 0; i<state.length ; i++)
         {
             if(state[i].product.id === SanPham.id)
             {
               index = i;
                 break;         }

         }
     }
           return index; 
     }


export default cart;