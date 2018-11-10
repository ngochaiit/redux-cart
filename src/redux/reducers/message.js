import * as types from './../constant/ActionTypes'
import * as message from './../constant/Message';

 
 var initialState =  message.MSG_WELCOME;


const Message = (state = initialState, action) =>
{
    switch(action.type)
    {
        case types.CHANGE_MESSAGE :
        return action.ThongBao;
        default: return state;
    }
}

 
export default Message;