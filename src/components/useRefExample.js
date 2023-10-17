import React, { useRef } from "react";
//here useRef is used to persist the value of counter and not cause re render after the initial render unlike useState
//also it used to access the input element directly from DOM and focus on it
const UseRefExample = () => {
  const counterRef = useRef(0);
  const inputRef = useRef(null);

  const incrementCounter = () => {
    counterRef.current++;
    console.log(`Counter value: ${counterRef.current}`);
    inputRef.current.focus();
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <p>Counter: {counterRef.current}</p>
      <button onClick={incrementCounter}>Increment Counter</button>
    </div>
  );
}

export default UseRefExample;
