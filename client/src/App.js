import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductsContainer from './redux/container/ProductsContainer'
import CartContainer from './redux/container/CartContainer'
import MessageContainer from './redux/container/MessageContainer'
class App extends Component {
  render() {
    return (
      <div clasName="App">
      
        <div>
        <Header/>
        <ProductsContainer/>
        <MessageContainer/>
        <CartContainer/>
        
       
       <Footer/>
        
    </div>
      </div>
    );
  }
}

export default App; 
