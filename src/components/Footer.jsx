import React from "react";
import "./components-style/footer.css";
import twitter from "../assets/img/twitter-logo-white-24.png";
import facebook from "../assets/img/facebook-circle-logo-white-24.png";
import intagram from "../assets/img/instagram-logo-white-24.png";

const Footer = () => {
  return (
    <div className="contenedor-principal-footer">
      <div className="d-flex flex-column justify-content-center align-items-center">
        <div className="d-flex flex-column justify-content-center align-items-center redes-sociales">
          <h4>REDES SOCIALES</h4>
          <div className="d-flex">
            <img src={facebook} alt="" />
            <img src={intagram} alt="" />
            <img src={twitter} alt="" />
          </div>
        </div>
        <p className="ciu">Construccion de Interfaces de Usuario 2023</p>
      </div>
    </div>
  );
};

export default Footer;
