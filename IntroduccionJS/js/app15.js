const boton = document.querySelector('#boton');
boton.addEventListener('click', () => {
  Notification.requestPermission()
    .then(resultado => console.log(`El resultado es ${resultado}`));
});

if (Notification.permission === 'granted') {
  new Notification('Esta es una notificación', {
    icon: 'img/usb1.jpg',
    body: 'Hola Mundo'
  });
} else if (Notification.permission === 'denied') {
  console.log('El usuario no quiere recibir notificaciones');
} else {
  console.log('El usuario no ha decidido');
}