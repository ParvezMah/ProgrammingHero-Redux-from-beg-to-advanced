import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, incrementByValue } from '../features/counter/counterSlice.js';

const Counter = () => {

  // const count = useSelector((state) => state.counter.count);
  const {count} = useSelector((state) => state.counter); // useSelector is a hook that allows you to extract data from the Redux store state, using a selector function.
  const dispatch = useDispatch(); // to send actions to the Redux store. These actions will then be handled by your reducers to update the state.  
  console.log("Counter count : ,", count);

  return (
    <div>
      
      <button onClick={()=> dispatch(incrementByValue(10))}>Increment by : 10</button> {/* Payload data used*/}
      <div>
      <button onClick={()=> dispatch(increment())}>Increment</button>
      </div>
      <div>
        <h1>{count}</h1>  
      </div>
    <div>
    <button onClick={()=> dispatch(decrement())}>Decrement</button>
    </div>
    </div>
  )
}

export default Counter