//Crear una clase Libro que contenga al menos las siguientes propiedades:
//ISBN
//Título
//Autor
//Número de páginas

//Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:

//“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

//Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
//Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.


class Libro {
    constructor(ISBN,
        titulo,
        autor,
        numeroPaginas
        ){
            this.isbn = ISBN;
            this.titulo = titulo;
            this.autor = autor;
            this. numeroPaginas = numeroPaginas
        }
        set cambioTitulo(nuevoTitulo){
            this.titulo = nuevoTitulo
        }
        set cambioAutor(nuevoAutor){
            this.autor = nuevoAutor
        }
        set cambioPaginas(cantPaginas){
            this.numeroPaginas = cantPaginas
        }
        mostrarLibro(){
            document.write(` <br> El libro  ${this.titulo } con ISBN ${this.isbn} creado por el autor ${this.autor} tiene ${this.numeroPaginas} páginas `)
        }
}
let libro1 = new Libro("aleatorio","El lado B del amor","Gabriel Rolon",650)
let libro2 = new Libro("aleatorio","El diario de Anna Frank","Anna Frank",962)
libro1.mostrarLibro();
libro2.mostrarLibro();