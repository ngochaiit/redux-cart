import React, { Component } from 'react';

import  { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import './App1.css';


const MenuLink = ({label, to, activeOnlyWhenExact}) =>
{
  return(
    <Route path = {to} exact ={activeOnlyWhenExact} children = {({match}) =>{
      var active = match ? 'active abc' : '';
      return(
        <li className={active} >

      <Link to = {to} className = 'nav-link' >{label}</Link>
      </li>
      )
     }}
    />
  )


}

class App extends Component {
  render() {
    return (
     <Router>
          <div clasName="App">
      {/* Menu */}
      <nav class="nav justify-content-center ">
      

     <MenuLink label = "Trang Chu" to = '/' activeOnlyWhenExact ={true}/>
      
      
      <MenuLink label = "Contact" to = '/contact' activeOnlyWhenExact ={true}/>
      
      <MenuLink label = "About" to = '/about' activeOnlyWhenExact ={false}/>
       
      </nav>
       {/* Noi Dung */}
       <Route path="/" component = {Home} exact/>
       <Route path = "/about" component = {About}/>
       <Route path = '/contact' component = {Contact}/>
      </div>
     </Router>
    );
  }
}

export default App; 
