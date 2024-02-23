
//Metodos de propiedad

const reproductor = {
    reproducir: function(id) {
        console.log(`Reproduciendo canción con el id ${id}...`);
    },                          
    pausar: function() {
        console.log('Pausando...');
    },
    
    crearPlaylist: function(nombre) {
        console.log(`Creando la playlist: ${nombre}...`);
    },
    reproducirPlaylist: function(nombre) {
        console.log(`Reproduciendo la playlist: ${nombre}...`);
    }
}

reproductor.borrarCancion = function(id) {
    console.log(`Borrando la canción con el id ${id}`);
}

console.log(reproductor);   

reproductor.reproducir(1300);

reproductor.pausar();
reproductor.borrarCancion(1300);
reproductor.crearPlaylist('Heavy Metal');
reproductor.reproducirPlaylist('Heavy Metal');