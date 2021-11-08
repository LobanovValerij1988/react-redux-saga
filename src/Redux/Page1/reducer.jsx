import * as ACTION from "./actions";

const INIT_STATE = {
  color: "yellow",
};

var reducer1 = function(state = INIT_STATE, action){
  switch (action.type) {
    case ACTION.CHANGE_COLOR:
    return {
        ...state,
        color: action?.color
      };
    case ACTION.RESET_COLOR:
         return {
        ...state,
        color: INIT_STATE.color
      }; 
    default:
      return state;
  }
}

export default reducer1
