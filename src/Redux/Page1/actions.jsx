export const CHANGE_COLOR = "CHANGE_COLOR";
export const RESET_COLOR = "RESET_COLOR";

export const changeColor = function (color) {
    return {
      type: CHANGE_COLOR,
      color
    }
  };
export const resetColor = function () {
    return {
      type: RESET_COLOR,
    }
  };