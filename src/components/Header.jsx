import React from "react";
import "./components-style/header.css";
import discoVinilo from "../assets/img/disco-vinilo.png";

const Header = ({ titulo }) => {
  return (
    <>
      <div className="contenedor-hero-image">
        <h1 className="display-1">{titulo}</h1>
        <h4 className="display-6">Tienda de Discos de Vinilo</h4>
        <div className="container disco-vinilo">
          <a href="#listaProductos">
            <img
              src={discoVinilo}
              alt="Disco vinilo"
              className="img-fluid rotate"
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
