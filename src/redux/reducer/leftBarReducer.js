
import Action from '../actions/actionID.js';

const initState={
    leftOpen : true,
}

const LeftBarReducer=(state=initState,action)=>{
    if(action.type===Action.SHOW_LEFT_MENU){
        return {
            ...state,
            leftOpen: !state.leftOpen
        }
    }
    return state;
}

export default LeftBarReducer