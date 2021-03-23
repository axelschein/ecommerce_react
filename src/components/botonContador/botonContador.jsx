import React, { useState } from "react";
import "./botonContador.css";

export const BotonContador = (props) => {
    
    const [a, actualizaA] = useState(1);
    return (
        <div>
            <div>Numero:{props.numero}</div>
            <div>Texto:{props.texto}</div>
            <div>{props.otrochild}</div>
            <div>Bool:{props.bool}</div>
            <div>Obj:{props.obj?.name}</div>

            <button disabled={props.bool} onClick={() => actualizaA(a+5)}>my button</button>

            <button disabled={props.bool} onClick={props.onClick2}>my button</button>

            {props.children}

        </div>
    );
};

export default BotonContador;