//declaracion de funcion

function sumar(){
    console.log(2+2);
}

sumar();

//expression de funcion
const sumar2 = function(){
    console.log(3+3);
}

sumar2();

//iife de funcion para que no se mezclen 
(function(){
    console.log('Esto es una funcion');
})();   //se ejecuta inmediatamente

