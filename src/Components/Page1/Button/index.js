import { useDispatch } from "react-redux";
import { resetColor} from "../../../Redux/Page1/actions"

function Button() {
  const dispatch = useDispatch();  
  const colorChangeHandler = () => {
    dispatch(resetColor());   
  };
  return (
      <button onClick={colorChangeHandler}>
        reset
      </button>
    );
  }
  
  export default Button;