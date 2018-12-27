import React, { Component } from 'react';

import {connect} from 'react-redux';
import Message from '../../components/Message'
import PropTypes from 'prop-types';
class MessageContainer extends Component {
  render() {
      
    
    var {message} = this.props;
    console.log(message);
    return (
    <Message message = {message}/>
   
    );
  }

 

}

MessageContainer.PropTypes = {
    message : PropTypes.string.isRequired
}




const mapStateToProps = state =>
{
    return {
        message: state.TinNhan,
    }
}







export default connect(mapStateToProps, null)(MessageContainer);
 