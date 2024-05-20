import React, { useState } from "react";

const Select = ({options, onSelect, defaultOption}) => {
    return options.map(o => (
        <div key={o.value}>
            <input type="radio" name="color" onChange={(evt) => onSelect(o.value)} checked={defaultOption === o.value} id={o.value} />
            <label htmlFor={o.value}>{o.text}</label>
        </div>
    ))
}

const Abstraccion2 = () => {
    const[option, setOption] = useState(3); /*la página se renderiza con la opción 3*/
    const options = [{value: 1, text:"Coca-Cola"}, {value: 2, text:"Pepsi"}, {value: 3, text:"Fanta"}];

    const optionSelected = (value) => {
        setOption(value);
    }

    return (
        <div className="m-5">
            <h1>Abstracción #2</h1>
            <Select options={options} onSelect={optionSelected} defaultOption={option} />
            <p>Opción seleccionada: {option}</p>
        </div>
    )
}

export default Abstraccion2;