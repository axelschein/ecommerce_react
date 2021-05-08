import React, { useState } from "react";
import "./ItemCount.css";

function ItemCount({ stock, initial, onAdd }) {
  const [count, setCount] = useState(initial);

  function incrementCount() {
    if (count > stock) {
      alert("No hay más productos");
    } else setCount(count => count + 1);
  }
  function decrementCount() {
    if (count <= 1) {
      alert("No hay productos negativos :D");
    } else setCount(count => count - 1);
  }
  return (
    <div className="botones">
      <button className="botonMenos" onClick={decrementCount}>
        -
      </button>
      <span>{count}</span>

      <button className="botonMas" onClick={incrementCount}>
        +
      </button>

      <button className="Agregar" onClick={()=> onAdd(count)}>
        Agregar al carrito
      </button>
    </div>
  );
}

export default ItemCount;