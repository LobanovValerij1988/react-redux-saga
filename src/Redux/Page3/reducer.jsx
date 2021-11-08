import * as ACTION from "./actions";

const INIT_STATE = {
  value: 1,
};

var reducer3 = function(state = INIT_STATE, action){
  switch (action.type) {
    case ACTION.DECREMENT_VALUE:
    case ACTION.INCREMENT_VALUE:    
    return {
        ...state,
        value: action?.value
      };
   
    default:
      return state;
  }
}

export default reducer3