import React, { useState, useEffect } from "react";
import "./components-style/changuito.css";
import Producto from "./Producto";
import carrito from "../assets/icono-carrito.png";
import { v4 as uuidv4 } from "uuid";

const Changuito = ({ changuito, eliminarProducto }) => {
  const [contador, setContador] = useState(0);
  const [totalCarrito, setTotalCarrito] = useState(0);
  const [isCarritoAbierto, setIsCarritoAbierto] = useState(false);
  const toggleCarrito = () => {
    setIsCarritoAbierto(!isCarritoAbierto);
  };

  useEffect(() => {
    setContador(changuito.length);
    const total = changuito.reduce((accumulator, producto) => {
      return accumulator + producto.precio;
    }, 0);
    setTotalCarrito(total);
  }, [changuito]);

  return (
    <>
      <div className="changuito">
        <div
          className="container d-flex justify-content-center align-items-center "
          onClick={toggleCarrito}
        >
          <h6>CARRITO</h6>
          <img src={carrito} alt="Carrito" />
          <h6>{contador}</h6>
        </div>
        {isCarritoAbierto && (
          <>
            <div className="d-flex flex-column align-items-center justify-content-center">
              {changuito.map((producto) => (
                <>
                  <Producto
                    key={uuidv4()}
                    producto={producto}
                    eliminarProducto={eliminarProducto}
                  />
                </>
              ))}
              <span class="badge text-bg-warning">Total: $ {totalCarrito}</span>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Changuito;
