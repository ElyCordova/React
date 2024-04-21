import { useEffect, useState } from 'react'

const Contador = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('El contador ha sido actualizado', count);
  }, [count]);

  const incrementar = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={ incrementar}>+</button> 
      <span>{count}</span> 
    </div>
  );
};

export default Contador;
