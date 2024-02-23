//POO

/**Object Literal**/

const productor = {
    nombre: 'Tablet',
    precio: 500
}

//object contructor

function Producto(nombre, precio, disponible){
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = disponible;
}

const producto2 = new Producto('Monitor curvo de 49', 1000, false);
const producto3 = new Producto('Laptop', 3000, true);

console.log(producto2);
console.log(producto3);



function formatearProducto(producto){
    return `El producto ${producto.nombre} tiene un precio de: ${producto.precio}`;
}

console.log(formatearProducto(producto2));

//Crear funciones que solo se utilizan en un objeto en especifico 

Producto.prototype.formatearProducto2 = function formatearProducto(){ 
    return `El producto ${this.nombre} tiene un precio de: ${this.precio}`;}

console.log(producto2.formatearProducto2());