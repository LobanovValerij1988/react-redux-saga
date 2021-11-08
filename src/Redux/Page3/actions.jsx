export const INCREMENT_VALUE = "INCREMENT_VALUE";
export const DECREMENT_VALUE = "DECREMENT_VALUE";
export const INCREMENT_ASYNC = "INCREMENT_ASYNC";


export const incrementValue = function (value) {
   return {
      type: "INCREMENT_VALUE",
      value
    }
  };

  export const decrementValue = function (value) {
    return {
      type: "DECREMENT_VALUE",
      value
    }
  };

  export const incrementAsync = function (value) {
   console.log("increment Async")
    return {
     type: "INCREMENT_ASYNC",
     value
    }
  };