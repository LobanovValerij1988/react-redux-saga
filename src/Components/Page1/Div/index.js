import './index.css';
import { useSelector } from "react-redux";

function Div() {
  const color = useSelector(state => state.reducer1.color);
      return (
        <div className="myDiv" style={{backgroundColor:color}}>
        </div>
      );
    }
    
    export default Div;