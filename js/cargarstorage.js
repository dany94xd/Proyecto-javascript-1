
// localStorage.setItem("personajes",JSON.stringify(arrayAvaters));
// localStorage.setItem("imagenes",JSON.stringify(imagenese));

if(localStorage.getItem('arrayAvaters') == null && localStorage.getItem('imagenese')==null){
      var arrayAvaters=JSON.parse(personajes);
     var imagenese=JSON.parse(imagenes);
    localStorage.setItem('arrayAvaters', JSON.stringify(arrayAvaters));
    localStorage.setItem('imagenese',JSON.stringify(imagenese));
    //Guardar el objeto en localStorage para tener acceso
}
