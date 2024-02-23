const usuarioAutenticado = new Promise((resolve, reject) => {
    const auth = true;
    if(auth) {
        resolve('Usuario autenticado');// El promise se cumple
    } else {
        reject('No se pudo iniciar sesion');//El promise no se cumple
    }
});


usuarioAutenticado
    .then( resultado => console.log(resultado))

    /*usuarioAutenticado
        .then ( function (resultado) {
            
            console.log(resultado);
        }*/

    .catch( error => console.log(error))


console.log(usuarioAutenticado);

//En los promises existen 3 valores
// Pending : No se ha cumplido pero tampoco se ha rechazado
// Fulfilled: ya se cumplio
// Rejected: Se ha rechazado o no se pudo cumplir