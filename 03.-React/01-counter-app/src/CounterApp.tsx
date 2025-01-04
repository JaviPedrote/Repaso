import { useState } from 'react';

interface CounterAppProps {
  value: number; // Prop obligatoria
}

const CounterApp = ({ value: initialValue }: CounterAppProps) => {

  // Estado inicializado con la prop `value`
  const [counter, setCounter] = useState(initialValue);

  // Función para incrementar
  const handleAdd = () => {
    setCounter(counter + 1);
    
  };

  // Función para decrementar
  const handleSubtract = () => {
    setCounter(counter - 1);
  };

  // Función para reiniciar
  const handleReset = () => {
    setCounter(initialValue);
  };

  return (
    <>
      <h3>Edad: {counter}</h3>
      <button onClick={handleAdd}>+1</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleSubtract}>-1</button>
    </>
  );
};

export default CounterApp;