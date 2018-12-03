const imagesJSON =
  '["img/avatar1.png","img/avatar2.png","img/avatar3.png","img/avatar4.jpg"]'; // Cargar imagenes
const images = JSON.parse(imagesJSON); // Parsear el json
const user = localStorage.getItem("current_user")
const juego = new Juego(images, user); // Inicializar el juego
$(document).ready(function() {
  juego.mount("#game"); // Montar el juego al selector #game
});
