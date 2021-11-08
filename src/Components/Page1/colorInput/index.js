import { useDispatch } from "react-redux";
import { useState } from 'react';
import { changeColor } from "../../../Redux/Page1/actions";

function Color() {
  const dispatch = useDispatch();
  const [color, setColor] = useState("");
   const colorChangeHandler = (() => {
     dispatch(changeColor(color));
   });
  const AddNewcolor = ((e) => {
      setColor(e.target.value);
  });
  return (
        <>
        <input onInput={AddNewcolor} type="text" placeholder="enter your color">
        </input>
        <button onClick={colorChangeHandler} > Set new color</button>
        </>

      );
    }
    
    export default Color;