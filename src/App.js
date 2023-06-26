import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";
import Changuito from "./components/Changuito";
import ListaProductos from "./components/ListaProductos";
import productos from "../src/productos/productos";
import { v4 as uuidv4 } from "uuid";

function App() {
  // Changuito
  const [changuito, setChanguito] = useState([]);

  // Agregar producto al changuito
  const agregarProducto = (id) => {
    const producto = productos.find((producto) => producto.id === id);
    const productoCopia = { ...producto, id: uuidv4() };
    setChanguito([...changuito, productoCopia]);
  };

  // Eliminar producto del changuito
  const eliminarProducto = (id) => {
    const nuevoChanguito = changuito.filter((producto) => producto.id !== id);
    setChanguito(nuevoChanguito);
  };

  return (
    <div>
      <Header titulo={"SUPER GROOVY"} />
      <ListaProductos
        productos={productos}
        agregarProducto={agregarProducto}
        eliminarProducto={eliminarProducto}
      />
      <Changuito changuito={changuito} eliminarProducto={eliminarProducto} />
      <Footer />
    </div>
  );
}

export default App;
