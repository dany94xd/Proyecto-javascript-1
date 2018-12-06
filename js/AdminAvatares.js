var arrayAvaters=JSON.parse(localStorage.getItem("personajes"));
var arrayImagenes=JSON.parse(localStorage.getItem("imagenes"));
//var arrayAvatares;
//console.log(arrayAvaters);
//console.log(arrayImagenes);
//  if(localStorage.getItem('arrayAvaters')!=null){
//     arrayAvaters=JSON.parse(localStorage.getItem("personajes"));
// // // //cargando los avatares del localstorage
// // console.log(arrayAvatares);
//  }


/////llamamos a las funciones llenar tablas
dibujarTablaAvatares();
dibujarTablaImagenes();


///////////////////llenando Tablas////////////////

function dibujarTablaAvatares(){

    $("#avatares").empty();

    $('#avatares').append($('<tr>')
    // .append($('<th>')).append("id") atributos de clases constructor.js
    .append($('<th>').append("nombre"))
    .append($('<th>').append("puntos"))
    )
    listarAvatares();
}
function listarAvatares(){
    $.each(arrayAvaters, function(index, avatar){
        $('#avatares').append($('<tr>')
            .append($('<td>').append(`<img src=${avatar.nombre} class="lista-img">`))
            .append($('<td>').append(avatar.puntos))
            .append($("<td>").append(`<button onclick=editarAvatar(${index})> Editar</button>`))
            .append($("<td>").append(`<button onclick=eliminarAvatar(${index})> Eliminar</button>`))
        )
        })
}

function dibujarTablaImagenes(){

    $("#Imagenes").empty();
    $('#Imagenes').append($('<tr>')
    .append($('<th>').append("nombre"))
    )
    listarImagenes();
}

function listarImagenes(){
    $.each(arrayImagenes,function(index,imagenes){
    $('#Imagenes').append($('<tr>')
    .append($('<td>').append(`<img src=${imagenes.nombre} class="lista-img">`))
    .append($("<td>").append(`<button onclick=editarImagen(${index})> Editar</button>`))
    .append($("<td>").append(`<button onclick=eliminarImagen(${index})> Eliminar</button>`))
        )

    })
}



///funciones de botones editar////

function editarAvatar(index){
    localStorage.setItem("index-edit",index);
    $("#editar-avatar").show(); ///etiqueta del html donde va a editar
     $(".editar-avatar").show();

     //$("#nombre-").val(arrayAvaters[index].nombre);
     $("#Avatar-portada").attr("src",arrayAvaters[index].nombre);
     $("#puntos-").val(arrayAvaters[index].clave);
}

function editarImagen(index){
    localStorage.setItem("index-edit",index);
    $("#editar-imagenes").show();
    $(".editar-imagenes").show();
    $("#Imagenes-portada").attr("src", arrayImagenes[index].nombre);


}


////funciones de eliminar ///

function eliminarAvatar(index){
    arrayAvaters.splice(index,1)

    localStorage.setItem('arrayAvatares',JSON.stringify(arrayAvaters));
    dibujarTablaAvatares();
}

function eliminarImagen(index){
    arrayImagenes.splice(index,1)

    localStorage.setItem('arrayImagenes',JSON.stringify(arrayImagenes));
    dibujarTablaImagenes();
}


//boton guardar avatares///

$("#guardar-avatares").click(function(){

    if(localStorage.getItem("index-edit")!=null){
        let nombre = $("#Avatar-portada").attr("src");
        let puntos = $("#puntos-").val();
    let puntosact =parseInt(puntos,10);

        let avatar_edit = new Avatar(nombre, puntosact);

        //arrayAvaters[localStorage.getItem("index-edit")] = avatar_edit;
        let indice=0;
        let foto= arrayAvaters[localStorage.getItem("index-edit")].nombre;
        for (var variable in arrayAvaters) {
        if(  foto==arrayAvaters[variable].nombre){
          arrayAvaters.splice(indice,1);
          break;
          }
          indice++;
        }
arrayAvaters.push(avatar_edit);
        localStorage.setItem('personajes', JSON.stringify(arrayAvaters));

        dibujarTablaAvatares();

        localStorage.removeItem("index-edit")

        $("#Avatar-portada").attr("src","")
        $("#puntos-").val("");

        $("#editar-avatar").hide();
        $(".editar-avatar").hide();

    }else{
        alert("No hay Avatar seleccionado para editar")
    }
})


///boton  guardar  editar Imagenes////

$("#guardar-imagenes").click(function(){
if(localStorage.getItem("index-edit")!=null){

   // $("#editar-imagenes").hide();
    let nombre = $("#Imagenes-portada").attr("src");
    let imagenes= arrayImagenes[localStorage.getItem("index-edit")].imagenes;
    //let index_imagenes = localStorage.getItem("index-edit");

    //console.log("hola");

    let imagenes_edit = new Imagenes(nombre);

 let indice=0;
        let foto= arrayImagenes[localStorage.getItem("index-edit")].nombre;
        for (var variable in arrayImagenes) {
        if(  foto==arrayImagenes[variable].nombre){
          arrayImagenes.splice(indice,1);
          break;
          }
          indice++;
        }
arrayImagenes.push(imagenes_edit);
        localStorage.setItem('imagenes', JSON.stringify(arrayImagenes));

    //console.log(imagenes_edit);

    //arrayImagenes[localStorage.getItem("index-edit")] = imagenes_edit;


    //localStorage.setItem('arrayImagenes', JSON.stringify(arrayImagenes));

    dibujarTablaImagenes();

    localStorage.removeItem("index-edit")

    $("#Imagenes-portada").attr("src","");

    $("#editar-imagenes").hide();
    $(".editar-imagenes").hide();

}else{
    alert("No hay Avatar seleccionado para editar")
}


})


//// boton nuevo avatar muestra popup nuevo avatar
$("#btn-nuevo").click(function(){
    $("#agregar-avatar").show();
     $(".agregar-avatar").show();
})

//////// boton nueva Imagen/////
$("#btn-nueva-imagen").click(function(){
$("#agregar-imagenes").show();
$(".agregar-imagenes").show();
})

///boton agregar avatares//
$("#btn-agregar-avatar").click(function(){

    let nombre= $("#portada-excursion-avatares").attr("src");
    let puntos = $("#puntos-a").val();

    if(nombre!="" && puntos !=""){
        let avatar_new = new Avatar(nombre,puntos);
        arrayAvaters.push(avatar_new);
        localStorage.setItem('personajes', JSON.stringify(arrayAvaters));

        dibujarTablaAvatares();

        $("#agregar-avatar").hide();
        $(".agregar-avatar").hide();

    }else{
        alert("Llene los campos")

    }

});


////Boton agregar  nueva Imagenes///
$("#guardar-nueva-Imagenes").click(function(){


    //let nombre= $("#nombre-a").val();
    let nombre = $("#portada-excursion-imagenes").attr("src");

    if(nombre!=""){
        let imagenes_new = new Imagenes(nombre);
        arrayImagenes.push(imagenes_new);
        localStorage.setItem('Imagenes', JSON.stringify(arrayImagenes));

        dibujarTablaImagenes();

        $("#agregar-imagenes").hide();
        $(".agregar-imagenes").hide();

    }else{
        alert("Llene los campos")

    }

});



//agregar avatar///

/*function agregarAvatar(avatar){
    arrayAvaters.push(avatar);
}*/


//agregar imagenes
// function agregarImagenes(imagenes){
//     arrayImagenes.push(imagenes);
// }
///boton cancelar edicion
$("#btnCancelarEditarAvatar").on('click', function(){
    $("#editar-avatar").hide();
     $(".editar-avatar").hide();
});

//boton cancelar imagenes
$("#btnCancelarEditarImagenes").on('click',function(){
$("#editar-imagenes").hide();
$(".editar-imagenes").hide();
});


///boton cancelar///

$("#btnCancelarAvatar").on('click',function(){
$("#agregar-avatar").hide();
$(".agregar-avatar").hide();
});

//boton cancelar nueva imagen
$("#btnCancelarNuevaImagenes").on('click',function(){
    $("#agregar-imagenes").hide();
    $(".agregar-imagenes").hide();
});

///Funcion URL////

function readURL(input,id){
    if(input.files && input.files[0]){
        var reader = new FileReader();

        reader.onload= function(e){
            console.log(e.target.result);
            $('#'+id).attr('src',e.target.result);
        }
        reader.readAsDataURL(input.files[0]);
    }
}

//nueva imagen Imagen
$("#imgInp").change(function(){
    readURL(this,"portada-excursion-imagenes");
})

//nueva imagen  Avatar
$("#imgInp1").change(function(){
    readURL(this,"portada-excursion-avatares");
})

//editar imagen
$("#editarPortadaImagen").change(function(){
readURL(this,"Imagenes-portada");
})


//editar imagen avatares

$("#editarPortadaAvatar").change(function(){
    readURL(this,"Avatar-portada");
    })



 //var descargar=document.getElementById("export-button");
      //  descargar.addEventListener('click', exportJSON);
        
        function exportJSON() {
            //var IEwindow = window.open();
            //IEwindow.document.write('sep=,\r\n' + JSON.stringify(objJSON));
            //IEwindow.document.close();
            //IEwindow.document.execCommand('SaveAs', true, "datos.json");
            //IEwindow.close();
        
            let dataStr ="avatares=["+ JSON.stringify(arrayAvaters)+"]\n";
            dataStr = dataStr+"imagenes=["+JSON.stringify(arrayImagenes)+"]";
            let dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
        
            let exportFileDefaultName = '../objetos.json';
        
            let linkElement = document.createElement('a');
            linkElement.setAttribute('href', dataUri);
            linkElement.setAttribute('download', exportFileDefaultName);
            linkElement.click();
        }