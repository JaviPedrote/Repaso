import { useCounter } from "../hooks/useCounter";

export const CounterWithCustomHook = () => {

    const {counter , increment,reset,decrement} = useCounter();

  return (
    <>
      <hr />
      <h1>Counter With Hook: {counter}</h1>
    

      <button onClick={increment} className="btn btn-primary">+1</button>
      <button onClick={reset} className="btn btn-primary">Reset</button>
      <button onClick={decrement} className="btn btn-primary">-1</button>
    </>
  );
};
