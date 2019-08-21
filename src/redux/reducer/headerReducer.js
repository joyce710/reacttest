/*
Reducer:

Handle actions when right menu need to be toggled

Return data to be rendered in right menu

*/

import Data from "./data.js";
import Action from "../actions/actionID.js";

const initState = {
    anchorEl : null,
    rightContent: Data.rightMenu
}

const headerReducer = (state = initState, action) => {
    //console.log(state);
    if(action.type === Action.SHOW_RIGHT_MENU)
    {
        return{
            ...state,
            // anchorEl这个值变成icoButton这个tag后，就会让menu里的东西在icobutton里显示
            anchorEl: action.event.currentTarget
        }
    }
    else if(action.type === Action.CLOSE_RIGHT_MENU)
    {
        return{
            ...state,
            anchorEl: null
        }
    }
    return state;
}



export default headerReducer;
