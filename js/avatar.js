var avatares='[{"nombre":"nino1.png","id":1,"puntos":0},{"nombre":"nino2.png","id":2,"puntos":0},{"nombre":"nino3.png","id":3,"puntos":0},{"nombre":"nino4.png","id":4,"puntos":0}]';
//var avatares='[{"nombre":"nino1.png","id":1},{"nombre":"nino2.png","id":2},{"nombre":"nino3.png","id":3},{"nombre":"nino4.png","id":4}]';


var conten=document.getElementById("personajes");
var datos=JSON.parse(avatares);

for (var img in datos) {
  conten.innerHTML+="<td id='tabla'><a href='explicacion.html?"+datos[img].nombre+"'  id='"+datos[img].id+"'><img class='rounded-circle' id='imgen' src='imagenes/"+datos[img].nombre+"''></a></td>";
  //var accion= document.getElementById("'"+datos[img].id+"'");
//var accion= document.getElementById("btn");
//  accion.addEventListener("click", colocarAvatar);
console.log(datos[img]);
}

 function colocarAvatar(nombre){
  let img = document.getElementById("personajes");
  //var nombre="avatar1.png";
  img.innerHTML="<img src='/imagenes/"+nombre+"'>";
}





// function sesion(indice){
//   var avatar
// avatar= datos[indice];

// //  localStorage.clear();
//   localStorage.setItem("sesion",JSON.stringify(avatar));

// }
