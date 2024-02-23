const meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio'];

const carrito = [
    {nombre: 'Monitor 27 pulgadas', precio: 500},
    {nombre: 'TV 40 pulgadas', precio: 700},
    {nombre: 'Tablet', precio: 300},
    {nombre: 'audifonos', precio: 100},
    {nombre: 'Teclado', precio: 200},
    {nombre: 'Celular', precio: 900},
    {nombre: 'Bocinas', precio: 200},
    {nombre: 'laptop', precio: 800}
];


//for each

meses.forEach(function(mes) {
    if(mes === 'Marzo') {
        console.log('Marzo si existe');
    }
});

//includes
const resultado = meses.includes('Marzo');
console.log(resultado);

// some idela para arreglo de objetos

resultado2 = carrito.some(function(producto) {
    return producto.nombre === 'Celular';
}); //siempre que al menos un elemento cumpla con la condicion

console.log(resultado2);

//Reduce

resultado3 = carrito.reduce(function(total, producto) {
    return total + producto.precio;
}, 0);

console.log(resultado3);

//filter
resultado4 = carrito.filter(function(producto) {
    return producto.precio > 400;
}); 

console.log(resultado4);