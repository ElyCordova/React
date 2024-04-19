import React from "react";
import Greetings from '../Title/Greetings';

export const ItemListContainer = (props) => {
    return (
        <Greetings greeting={props.texto} />
    );
}

export default ItemListContainer;