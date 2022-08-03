//Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio,
//además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
//Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
//Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.

class Producto {
  constructor(codigo, nombre, precio) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
  }

  mostrarDatos() {
    document.write(`<ul>
        <li>Codigo: ${this.codigo}</li>
        <li>Nombre: ${this.nombre}</li>
        <li>Precio: ${this.precio}</li>
        </ul>`);
  }
}
let productosTotales = [
  torta1 = new Producto("9668", "Torta Pavlova", "$3600"),
  torta2 = new Producto(
    "1542",
    "Torta Oreo",
    "$1600"),
    torta3 = new Producto("161", "Torta Rojel", "$2600")
  ,
];

productosTotales[
  torta1.mostrarDatos(),torta2.mostrarDatos(), torta3.mostrarDatos()
];
