import React from "react";
import { useAppSelector } from "../hooks/useAppSelector";
import { useAppDispatch } from "../hooks/useAppDispatch";
import {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
} from "../store/slices/counterSlice";

const Counter = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>
        Increment by 5
      </button>
      <button onClick={() => dispatch(decrementByAmount(5))}>
        Decrement by 5
      </button>
      <p>Count: {count}</p>
    </div>
  );
};

export default Counter;
