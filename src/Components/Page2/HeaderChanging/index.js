import { useDispatch } from "react-redux";
import { changeHeader } from "../../../Redux/Page2/actions";
import { useState } from 'react';


function HeaderChanging() {
    const dispatch = useDispatch();
    const [header, setHeader] = useState("");
     const HeaderChangeHandler = () => {
      dispatch(changeHeader(header));
     };
    const AddNewHeader = ((e) => {
       setHeader(e.target.value);
    });
    return (
          <>
          <input onInput={AddNewHeader} type="text" placeholder="enter your header">
          </input>
          <button onClick={HeaderChangeHandler} > Set new header</button>
          </>
  
        );
      }
      
      export default HeaderChanging;