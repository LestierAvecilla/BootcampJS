// Async / Await

function descargaNuevosClientes() {
    return new Promise(resolve => {
        console.log('Descargando clientes... espere...');
        setTimeout(() => {
            resolve('Los clientes fueron descargados');
        }, 5000);
    });
}

function descargaUltimosPedidos() {
    return new Promise(resolve => {
        console.log('Descargando pedidos... espere...');
        setTimeout(() => {
            resolve('Los pedidos fueron descargados');
        }, 5000);
    });
}


async function app() {
    try {
        /* const clientes = await descargaNuevosClientes();
        const pedidos = await descargaUltimosPedidos();
        console.log(clientes);
        console.log(pedidos); */

        const resultado = await Promise.all([descargaNuevosClientes(), descargaUltimosPedidos()]);
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
}

app();