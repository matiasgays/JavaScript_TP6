// Arreglos

const provincias = ['Santa Fe', 'Buenos Aires', 'San Luis', 'Santa Cruz', 'Cordoba','Catamarca', 'Chaco', 'Chubut', 'Corrientes', 'Entre Rios', 'Formosa', 'Jujuy', 'La Pampa', 'La Rioja', 'Mendoza', 'Misiones', 'Neuquen', 'Rio Negro', 'Salta', 'San Juan', 'Santiago del Estero', 'Tierra del Fuego', 'Tucuman'];
let vocal = prompt(`Elija la letra de alguna provincia argentina`);
const provinciasParecidas = provincias.filter(provincia => String(provincia).startsWith(vocal.toUpperCase()));
console.log(provinciasParecidas);
const provinciasOrdenadas = provincias.sort().join('-');
console.log(`Provincias Argentinas ordenadas por orden alfabetico: ${provinciasOrdenadas}`);






