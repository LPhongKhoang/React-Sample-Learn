// import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decreaseCounterAction } from './actions/decrease-counter';
import { increaseCounterAction } from './actions/increase-counter';

// Define the component
export const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  const handleIncrease = () => {
    dispatch(increaseCounterAction(1));
  }
  const handleDecrease = () => {
    dispatch(decreaseCounterAction(1));
  }

  return (
    <div>
      <h1>Counter - redux</h1>
      <p>{counter.counter}</p>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  );
}
