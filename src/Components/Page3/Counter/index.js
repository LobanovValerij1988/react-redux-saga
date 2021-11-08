import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { incrementValue,decrementValue,incrementAsync} from '../../../Redux/Page3/actions';

function Counter () 
 { 
  const dispatch = useDispatch();
  const onIncrementAsync = (() => {
    dispatch(incrementAsync(++value));
   });
  const onIncrement = (() => {
    dispatch(incrementValue(++value));
   });
   const onDecrement = (() => {
    dispatch(decrementValue(--value));
   });
  let value = useSelector(state => state.reducer3.value);
  return(<div>
    <button onClick={onIncrementAsync}>
      Increment after 1 second
    </button>
    {' '}
    <button onClick={onIncrement}>
      Increment
    </button>
    {' '}
    <button onClick={onDecrement}>
      Decrement
    </button>
    <hr />
    <div>
      Clicked: {value} times
    </div>
  </div>
  )}
  export default Counter