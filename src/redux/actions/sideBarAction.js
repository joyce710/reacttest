import Action from './actionID.js';
const ShowSublist=(oneState)=>{
    return {
        type: Action.SHOW_SUBLIST,
        oneState: oneState
    };
};

const SetState=(oneState,bool)=>{
    return {
        type:Action.SET_STATE,
        oneState: oneState,
        bool: bool
    }
}


const SwitchTabs = (event, value) =>{
    return{
        type: Action.SWITCH_TABS,
        event: event,
        value: value
    };
};

const ResetValue = () =>{
    return{
        type: Action.RESET_TABS_VALUE
    };
};


export default {SetState,ShowSublist,SwitchTabs, ResetValue};