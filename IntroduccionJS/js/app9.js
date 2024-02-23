for (let i = 0; i <= 10; i++) {
  console.log(i);
}


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

carrito.forEach( producto => console.log(producto.nombre)); //para recorrer un arreglo, para mostrar en consola

carrito.forEach(function(producto) {
    console.log(producto.nombre)
});

carrito.map( producto => console.log(producto.nombre)); //te crea un nuevo arreglo

