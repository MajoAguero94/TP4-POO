// Crea una clase llamada Persona que siga las siguientes condiciones:
//Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
//Los métodos que se debe poder utilizar  son:
//mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
//Para realizar este método tener en cuenta la siguiente tabla de generaciones:



class Persona {
    constructor(nombre, edad, dni, sexo, peso, altura, añoNacimiento) {
      this.nombre = nombre;
      this.edad = edad;
      this.dni = dni;
      this.sexo = sexo;
      this.peso = peso;
      this.altura = altura;
      this.nacimiento = añoNacimiento;
    }
    generacion() {
      if ((this.nacimiento > 1929) & (this.nacimiento < 1949)) {
        document.write(
          "Pertenece a la generacion SILENT GENERATION - Rasgo caracteristico AUSTERIDAD "
        );
      } else if ((this.nacimiento > 1948) & (this.nacimiento < 1969)) {
        document.write(
          "Pertenece a la generacion BABY BOOM - Rasgo caracteristico AMBICION "
        );
      } else if ((this.nacimiento > 1968) & (this.nacimiento < 1981)) {
        document.write(
          "Pertenece a la generacion X - Rasgo caracteristico OBSESION POR EL EXITO "
        );
      } else if ((this.nacimiento > 1980) & (this.nacimiento < 1994)) {
        document.write(
          "Pertenece a la generacion Y MILLENNIALS - Rasgo caracteristico FRUSTACION "
        );
      } else if ((this.nacimiento > 1993) & (this.nacimiento < 2011)) {
        document.write(
          "Pertenece a la generacion Z - Rasgo caracteristico IRREVERENCIA "
        );
      } else document.write("No tiene generacion asignada");
    }
    mayorEdad() {
      if (this.nacimiento <= 2004) {
        document.write("<br> Es mayor de Edad");
      } else document.write("<br> Es menor de edad");
    }
    mostrarDatos() {
      document.write(`<ul>
         <li>Nombre: ${this.nombre}  </li>
         <li>Edad: ${this.edad} </li>
         <li>DNI: ${this.dni} </li>
         <li>Sexo: ${this.sexo} </li>
         <li>Peso: ${this.peso} </li>
         <li>Altura: ${this.altura} </li>
         <li>Año nacimiento: ${this.nacimiento} </li>
          </ul>`);
    }
  }
  let majo = new Persona(
    "Maria Jose",
    "28",
    "38184269",
    "M",
    "56kg",
    "1.65m",
    1994
  );
  majo.mostrarDatos();
  majo.generacion();
  majo.mayorEdad();
  
  
  
  
  
 