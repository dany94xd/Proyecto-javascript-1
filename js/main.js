const imagesJSON =
  '["img/gato.jpg","img/perro.jpg","img/pato.jpg","img/pollo.jpg"]'; // Cargar imagenes
var images = JSON.parse(localStorage.getItem("imagenese")); // Parsear el json

const avatares='["img/avatar1.png","img/avatar2.png","img/avatar3.png","img/avatar4.png"]';
// const current_user= JSON.parse(imagesAvatar);
const user = JSON.parse(localStorage.getItem("avatares"))
const juego = new Juego(images, user); // Inicializar el juego
$(document).ready(function() {
  juego.mount("#game"); // Montar el juego al selector #game
});
