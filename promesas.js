/*Crea un archivo fuente que sea una copia del archivo 
fuente "arrow_functions.js" del ejercicio anterior*/

let datos = [
{nombre: "Nacho", telefono: "966112233", edad: 40},
{nombre: "Ana", telefono: "911223344", edad: 35},
{nombre: "Mario", telefono: "611998877", edad: 15},
{nombre: "Laura", telefono: "633663366", edad: 17}
];

/* Lo que vas a hacer en este ejercicio es adaptar las dos funciones 
"nuevaPersona" y "borrarPersona" para que devuelvan una promesa.*/

/* • En el caso de "nuevaPersona", se devolverá con resolve el objeto persona insertado, 
si la inserción fue satisfactoria, o con reject el mensaje "Error: el teléfono ya existe" 
si no se pudo insertar la persona porque ya existía su teléfono en el vector */

function nuevaPersona(persona) {
    return new Promise((resolve, reject) => {
        const existe = datos.some(p => p.telefono === persona.telefono);
        if (!existe) {
            datos.push(persona);
            resolve(persona);
        } else {
            reject("Error: el teléfono ya existe");
        }
    });
};

/* • En el caso de "borrarPersona", se devolverá con resolve el objeto persona eliminado, 
si el borrado fue satisfactorio, o con reject un mensaje "Error: no se encontraron 
coincidencias" si no existía ninguna persona con ese teléfono en el vector.*/

function borrarPersona(telefono) {
    return new Promise((resolve, reject) => {
        const persona = datos.find(p => p.telefono === telefono);
        if (persona) {
            datos = datos.filter(p => p.telefono !== telefono);
            resolve(persona);
        } else {
            reject("Error: no se encontraron coincidencias");
        }
    });
};

/* Modifica el código del programa principal para que intente añadir una persona correcta y otra 
equivocada (teléfono ya existente en el vector), y borrar una persona correcta y otra equivocada 
(teléfono no existente en el vector). Comprueba que el resultado al ejecutar es el que esperabas.*/

nuevaPersona({nombre: "Juan", telefono:"965661564", edad: 60})
    .then(persona => console.log("Persona añadida:", persona))
    .catch(error => console.log(error));

nuevaPersona({nombre: "Ana", telefono:"911223344", edad: 35})
    .then(persona => console.log("Persona añadida:", persona))
    .catch(error => console.log(error));

borrarPersona("633663366")
    .then(persona => console.log("Persona eliminada:", persona))
    .catch(error => console.log(error));

borrarPersona("666666666")
    .then(persona => console.log("Persona eliminada:", persona))
    .catch(error => console.log(error));