/*
Reducer:

Handle actions when left menu sublists need to be toggled
Handle actions to expand sublist if needed when refreshing page
Handle actions when central display tabs need to be switched
Handle actions when central display tabs need to be reset

Return data to be rendered in left menu, including sublist data

*/


import Data from './data.js';
import Action from '../actions/actionID.js';


const initState = {
    data : Data.navItems,
    value: 0,
    event: null
}

const sideBarReducer = (state = initState, action) =>{
    if(action.type === Action.SHOW_SUBLIST)
    {
        return{
            ...state,
            [action.oneState]:  !state[action.oneState]
        }

    }
    //我最初初始化state里没值，这个setstate就是给他个true或false，之后，就是给他弄得label
    else if(action.type === Action.SET_STATE)
    {
        if(action.bool && state[action.oneState] === undefined)
        {
            return{
                ...state,
                [action.oneState]:  action.bool
            }
        }
    }
    else if(action.type === Action.SWITCH_TABS)
    {
        return{
            ...state,
            value: action.value,
            event: action.event
        }
    }
    else if(action.type === Action.RESET_TABS_VALUE)
    {
        return{
            ...state,
            value: 0
        }
    }
    return state;
}

export default sideBarReducer;
