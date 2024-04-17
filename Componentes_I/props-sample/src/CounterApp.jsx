import { useState } from "react";

const CounterApp = ({ value }) => {
    /*funcion para actualizar el estado usando useState*/
    const [ counter, setCounter ] = useState( value );

    const handleAdd = () => {
    /*actualizar el valor de counter*/
      setCounter(counter + 1);
    }


    const handleSubstract = () => {
        /*actualizar el valor de counter*/
          setCounter(counter - 1); 
        }

        const handleReset = () => {
            /*actualizar el valor de counter*/
              setCounter( value ); 
            }

    return (
        /*usando fragment*/
        <>
          <h1>Counter App</h1>
          <h2>{ counter }</h2>
          
          <button onClick={ handleAdd }> +1 </button>
          <button onClick={ handleSubstract }> -1 </button>
          <button onClick={ handleReset }> Reset </button>
        
        </>

    );
}

export default CounterApp; 