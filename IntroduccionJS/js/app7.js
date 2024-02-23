//arrow function

const sumar2 = (n1,n2) => console.log( n1 + n2);
sumar2(5, 10);

const aprendiendo = tecnologia => console.log(`Aprendiendo ${tecnologia}`)


aprendiendo('javascript');

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


meses.forEach( mes => {
    if(mes === 'Marzo') {
        console.log('Marzo si existe');
    }
});


resultado2 = carrito.some(producto =>  producto.nombre === 'Celular'); //siempre que al menos un elemento cumpla con la condicion

console.log(resultado2);


resultado3 = carrito.reduce((total, producto) => total + producto.precio, 0);

console.log(resultado3);

resultado4 = carrito.filter( producto => producto.precio > 400); 

console.log(resultado4);