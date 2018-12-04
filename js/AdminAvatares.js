var arrayAvaters=JSON.parse(localStorage.getItem("personajes"));
var arrayImagenes=JSON.parse(localStorage.getItem("imagenes"));
//var arrayAvatares;
console.log(arrayAvaters);
console.log(arrayImagenes);
//  if(localStorage.getItem('arrayAvatares')!=null){
//    arrayAvatares=JSON.parse(localStorage.getItem("personajes"));
// // //cargando los avatares del localstorage
// console.log(arrayAvatares);
// }


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
    .append($('<th>')).append("nombre"))
    
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

     $("#nombre-").val(arrayAvaters[index].nombre);
     $("#puntos-").val(arrayAvaters[index].puntos);
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
        let nombre = $("#nombre-").val()
        let puntos = $("#puntos-").val();
        

        let avatar_edit = new Avatar(nombre, puntos);

        arrayAvaters[localStorage.getItem("index-edit")] = avatar_edit;

        localStorage.setItem('arrayAvatares', JSON.stringify(arrayAvaters));

        dibujarTablaAvatares();

        localStorage.removeItem("index-edit")

        $("#nombre-").val("");
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

    console.log("hola");

    let imagenes_edit = new Imagenes(nombre);
    //console.log(imagenes_edit);

    arrayImagenes[localStorage.getItem("index-edit")] = imagenes_edit;

    localStorage.setItem('arrayImagenes', JSON.stringify(arrayImagenes));

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

    let nombre= $("#nombre-a").val();
    let puntos = $("#puntos-a").val();

    if(nombre!="" && puntos !=""){
        let avatar_new = new Avatar(nombre,puntos);
        arrayAvaters.push(avatar_new);
        localStorage.setItem('arrayAvatares', JSON.stringify(arrayAvaters));

        dibujarTablaAvatares();

        $("#agregar-avatares").hide();
        $(".agregar-avatares").hide();

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
        localStorage.setItem('arrayImagenes', JSON.stringify(arrayImagenes));

        dibujarTablaImagenes();

        $("#agregar-imagenes").hide();
        $(".agregar-imagenes").hide();

    }else{
        alert("Llene los campos")
    
    }

});



//agregar avatar///

function agregarAvatar(avatar){
    arrayAvaters.push(avatar);
}


//agregar imagenes
function agregarImagenes(imagenes){
    arrayImagenes.push(imagenes);
}
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

//nueva imagen
$("#imgInp").change(function(){
    readURL(this,"portada-excursion-imagenes");
})

//editar imagen
$("#editarPortadaImagen").change(function(){
readURL(this,"Imagenes-portada");
})




