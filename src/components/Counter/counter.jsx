import { useState } from "react";
import Hook from "../HookPractice/Hook";

function Counter() {
  let [counter, setCounter] = useState(0);

  let increaseCounter = () => {
    setCounter(counter + 1);
  };

  let decreaseCounter = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <Hook 
      count={counter}
      increase={increaseCounter}
      decrease={decreaseCounter}
      />
    </>
  );
}

export default Counter;
