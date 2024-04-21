import { useState } from "react";

const ItemCount = ({stock, initial, onAdd }) => {
    
    const [ count, setCount ] = useState(initial);

const handleIncrement = () => {
    if (count < stock){
        setCount(count + 1);
    }
};

/*Para decrementar los productos*/
const handleDecrement = () => {
    if (count > 1){
        setCount(count - 1);
    }
};

/*Para agregar productos al carrito*/
const handleAddtoCart = () => {
    if (count > 0 && count <= stock){
        onAdd(count)
    }
}; 


    return (
        <div>
           <button onClick={handleDecrement}>-</button>
           <span>{count}</span>
           <button onClick={handleIncrement}>+</button> 
           <button onClick={handleAddtoCart}>Agregar al carrito</button> 
        </div>
    )
};

export default ItemCount;