import React from "react";
import Producto from "./Producto";
import "./components-style/listaProductos.css";
import { v4 as uuidv4 } from "uuid";

const ListaProductos = ({ productos, agregarProducto, eliminarProducto }) => {
  return (
    <div id="listaProductos" className="contenedor-principal">
      <div className="container-md cont-lista-productos">
        <h1>Listado de Discos</h1>
        <div className="row justify-content-center align-items-center">
          {productos.map((producto) => (
            <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
              <Producto
                producto={producto}
                productos={productos}
                key={uuidv4()}
                agregarProducto={agregarProducto}
                eliminarProducto={eliminarProducto}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListaProductos;
