const imagesJSON =
  '["img/gato.jpg","img/perro.jpg","img/pato.jpg","img/pollo.jpg"]'; // Cargar imagenes
const images = JSON.parse(imagesJSON); // Parsear el json

const avatares='["img/nino1.png","img/nino2.png","img/nino3.png","img/nino4.png"]'; 
// const current_user= JSON.parse(imagesAvatar);
const user = JSON.parse(localStorage.getItem("avatares"))
console.log(user)
//const user=JSON.parse(avatares);
const juego = new Juego(images, user); // Inicializar el juego
$(document).ready(function() {
  juego.mount("#game"); // Montar el juego al selector #game
});
