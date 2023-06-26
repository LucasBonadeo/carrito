import images from "../assets/img/images";
import { v4 as uuidv4 } from "uuid";

// Lista de productos

const productos = [
  {
    id: uuidv4(),
    img: images.yellowSubmarine,
    grupo: "The Beatles",
    disco: "Yellow Submarine",
    precio: 12000,
  },
  {
    id: uuidv4(),
    img: images.rubberSoul,
    grupo: "The Beatles",
    disco: "Rubber Soul",
    precio: 12000,
  },
  {
    id: uuidv4(),
    img: images.darkSide,
    grupo: "Pink Floyd",
    disco: "The Dark Side of the Moon",
    precio: 11000,
  },
  {
    id: uuidv4(),
    img: images.theWall,
    grupo: "Pink Floyd",
    disco: "The Wall",
    precio: 11000,
  },
  {
    id: uuidv4(),
    img: images.afterMath,
    grupo: "The Rolling Stones",
    disco: "Aftermath",
    precio: 13000,
  },
  {
    id: uuidv4(),
    img: images.flowers,
    grupo: "The Rolling Stones",
    disco: "Flowers",
    precio: 13000,
  },
  {
    id: uuidv4(),
    img: images.fireball,
    grupo: "Deep Purple",
    disco: "Fireball",
    precio: 9000,
  },
  {
    id: uuidv4(),
    img: images.revolver,
    grupo: "The Beatles",
    disco: "Revolver",
    precio: 12000,
  },
  {
    id: uuidv4(),
    img: images.abbeyRoad,
    grupo: "The Beatles",
    disco: "Abbey Road",
    precio: 12000,
  },
];

export default productos;
