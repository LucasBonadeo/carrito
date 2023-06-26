import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./components-style/productos.css";

const Producto = ({
  producto,
  productos,
  agregarProducto,
  eliminarProducto,
}) => {
  const { id, img, disco, grupo, precio } = producto;

  return productos ? (
    <Card className="producto-lista float" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{disco}</Card.Title>
        <Card.Text>
          Grupo - {grupo} <br />$ {precio}
        </Card.Text>
        <div className="d-flex align-items-center justify-content-center">
          <Button variant="success" onClick={() => agregarProducto(id)}>
            Comprar
          </Button>
        </div>
      </Card.Body>
    </Card>
  ) : (
    <div className="d-flex producto-carrito">
      <div className="container-fluid d-flex flex-column">
        <p className="nombre-disco">
          {disco}
          <br />
          {grupo} <br /> ${precio}
        </p>
      </div>
      <Button variant="danger" onClick={() => eliminarProducto(id)}>
        Eliminar
      </Button>
    </div>
  );
};

export default Producto;
