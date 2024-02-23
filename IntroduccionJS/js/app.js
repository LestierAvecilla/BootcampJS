let producto = 'audifonos gamer';
console.log(producto);

let numero = 1;
let numero2 = 2;

console.log(producto.indexOf('TEST'))

const producto2 = {
    nombre: 'Monitor 20 Pulgadas',
    precio: 300,
    disponible: true
}


console.log(producto2);

const {nombre,precio} = producto2;

console.log(nombre);
console.log(precio);

producto2.imagen = 'imagen.jpg';


const producto3 = {
    medida :'90cm',
    peso : '2kg',
    color : 'azul'
}

const unionproduct = {...producto2, ...producto3};

console.log(unionproduct);

const numeros = [10,20,30,40,50];

console.table(numeros);

console.log(numeros[2]);

numeros.forEach(function(numero){
    console.log(numero);
});

/*numeros.push(60);
numeros.unshift(-10,-20);
numeros.pop();
numero.shift();
numero.splice(3,-1);*/

const nuevoarreglo = [...numeros,'60'];

const nuevoarreglo2 = ['10',...numeros];

console.log(nuevoarreglo);

console.log(nuevoarreglo2);


