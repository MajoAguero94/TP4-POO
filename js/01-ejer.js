//Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. 
//Crea los métodos necesarios para permitir encender y apagar el auto.

let auto = {
    //propiedades
    marca: 'Ford',
    color: 'Blanco',
    modelo: 'ka',
       
    estado: { 
        encendido: true,
        apagado: true,


    },

    //metodos
    encender: ()=>{ document.write(`<p>Para enceder el auto verifique que el tanque tenga combustible y gire la llave.. </p>`)},
    apagar: ()=>{document.write(`<p> Para apagar el auto quite la llave </p>`) },

    

}

//mostrar mmi objeto
document.write(`<p>Marca: ${auto.marca}</p>`)
document.write(`<p>Color: ${auto.color}</p>`)
document.write(`<p>Modelo: ${auto.modelo}</p>`)
document.write(`<p>Estado: ${auto.estado.encendido}</p>`)

// mostrar metodo

auto.encender();
auto.apagar();

