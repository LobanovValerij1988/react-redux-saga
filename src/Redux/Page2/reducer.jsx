import * as ACTION from "./actions";

const INIT_STATE = {
  header: "Hello world",
};

var reducer2 = function(state = INIT_STATE, action){
  switch (action.type) {
    case ACTION.CHANGE_HEADER:
    return {
        ...state,
        header: action?.header
      };
   
    default:
      return state;
  }
}

export default reducer2
