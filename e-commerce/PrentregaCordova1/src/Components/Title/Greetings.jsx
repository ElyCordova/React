import React from "react";
import '../Title/Greetings.css';

export const Greetings = (props) => {
    return(
        <div className="nombre"> 
            <h1>{props.greeting}</h1>
        </div>
    );
}

export default Greetings;