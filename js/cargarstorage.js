   

// localStorage.setItem("personajes",JSON.stringify(arrayAvaters));
// localStorage.setItem("imagenes",JSON.stringify(imagenese));
var ver=localStorage.getItem('personajes');
if(ver == null ){
   
     var arrayAvaters=JSON.parse(personajes);
     var imagenese=JSON.parse(imagenes);

    localStorage.setItem('personajes', JSON.stringify(arrayAvaters));
    localStorage.setItem('imagenese',JSON.stringify(imagenese));
    //Guardar el objeto en localStorage para tener acceso
}
