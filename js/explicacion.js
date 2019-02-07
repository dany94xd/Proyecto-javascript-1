
cadVariables=JSON.parse(localStorage.getItem("sesion"));
colocarAvatar(cadVariables);

function colocarAvatar(nombre){
  let img = document.getElementById("avatar");
  //var nombre="avatar1.png";
  img.innerHTML="<img class='img-responsive' src="+nombre.nombre+">";
}

function llamar(){
  window.location.href = "game.html";
}