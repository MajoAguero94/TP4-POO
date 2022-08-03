//Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, 
//mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área

class Reactangulo {
    constructor (alto, ancho){
        this.alto = alto;
        this.ancho = ancho;
    }

    mostrarDatos(){
        document.write ( `<ul>
        
        <li>Altura: ${this.alto}</li>
        <li>Ancho: ${this.ancho}</li>
       
        
        </ul>`


        )
    }

    perimetro(){
        document.write('El perimetro del rectangulo es:' + 2 *(this.alto + this.ancho))
    }

    area(){
        document.write('<br>El perimetro del rectangulo es:' + this.alto * this.ancho)

    }

    set modificarAltura(nuevaAltura){
        this.alto= nuevaAltura;
    }

    set modificarAncho(nuevoAncho){
        this.ancho= nuevoAncho
    }






}
let rectagulo1 = new Reactangulo (20,30);
rectagulo1.mostrarDatos();
rectagulo1.perimetro();
rectagulo1.area();

rectagulo1.modificarAltura = 10;
rectagulo1.modificarAncho = 20;
rectagulo1.mostrarDatos();
rectagulo1.perimetro();
rectagulo1.area();


