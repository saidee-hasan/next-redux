import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, addByAmount } from "./counterSlice";
import type { AppDispatch, RootState } from "../../store/store";

const Counter: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();
  const [amount, setAmount] = useState<number>(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <div style={{ marginTop: "20px" }}>
        <input 
          type="number" 
          value={amount} 
          onChange={(e) => setAmount(Number(e.target.value))} 
        />
        <button onClick={() => dispatch(addByAmount(amount))}>
          Add Amount
        </button>
      </div>
    </div>
  );
};

export default Counter;
