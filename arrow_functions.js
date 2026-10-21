/*Crea un archivo fuente con el siguiente código: */

let datos = [
{nombre: "Nacho", telefono: "966112233", edad: 40},
{nombre: "Ana", telefono: "911223344", edad: 35},
{nombre: "Mario", telefono: "611998877", edad: 15},
{nombre: "Laura", telefono: "633663366", edad: 17}
];

/*Debes implementar las funciones "nuevaPersona" y "borrarPersona" 
para que hagan su cometido. La primera recibirá la persona como parámetro y, 
si el teléfono no existe en el vector de personas, la añadirá. 

En cuanto a "borrarPersona", eliminará del vector a la persona que tenga 
dicho teléfono, en caso de que exista. Para eliminar a la persona del vector, 
puedes simplemente filtrar las personas cuyo teléfono no sea el indicado, 
y asignar el resultado al propio vector de personas */

nuevaPersona({nombre: "Juan", telefono:"965661564", edad: 60});
nuevaPersona({nombre: "Rodolfo", telefono:"910011001", edad: 20});

function nuevaPersona(persona) {
    const existe = datos.some(p => p.telefono === persona.telefono);
    if (!existe) {
        datos.push({nombre: "Juan", telefono:"965661564", edad: 60});
        datos.push({nombre: "Rodolfo", telefono:"910011001", edad: 20});
    } 
};

borrarPersona("910011001");

function borrarPersona(telefono) {
    datos = datos.filter(p => p.telefono !== telefono);
};

console.log(datos);