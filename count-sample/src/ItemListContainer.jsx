import ItemCount from "./ItemCount";

const ItemListContainer = () => {
    const stock = 10;

    const onAdd = (quantity) => {
        console.log(`Se agregaron ${quantity} productos al carrito.`);
    }

    return (
        <div>
            <h1>Lista de Productos</h1>
            <ItemCount stock = {stock} initial = {1} onAdd={onAdd} />
        </div>
    )
};

export default ItemListContainer;

