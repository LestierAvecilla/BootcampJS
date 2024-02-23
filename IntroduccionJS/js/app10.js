//this

const reservacion = {
    nombre: 'Lestier',
    apellido: 'Avecilla',
    total: 5000,
    pagado: false,
    informacion: function() {
        console.log(`El cliente ${this.nombre} reservo y su cantidad a pagar es de ${this.total}`);
    }
}

const reservacion2 = {
    nombre: 'Pedro',
    apellido: 'Avecilla',
    total: 4000,
    pagado: true,
    informacion: function() {
        console.log(`El cliente ${this.nombre} reservo y su cantidad a pagar es de ${this.total}`);
    }
};

reservacion.informacion ();
reservacion2.informacion ();