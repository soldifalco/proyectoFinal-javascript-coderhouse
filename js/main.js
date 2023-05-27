//funcion que me permite mostrar y ocultar contenido de unas cards tocando una imagen con 
//los gatos recén ingresados:

//funcion mostrar:

function mostrar (){
    document.getElementById('img-gato-mostrar').style.display = 'block';
}

//funcion ocultar:

function ocultar (){
    document.getElementById('img-gato-mostrar').style.display = 'none';
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////


//FORMULARIO DE CONTACTO

//LOCAL STORAGE


let btnenviar = document.getElementById("enviar");
let btnreset = document.getElementById("reset");
let form = document.getElementById("form");

//actualizar formulario

form.addEventListener("enviar", (e) => {
e.preventDefault();
});

//boton reset:

btnreset.addEventListener("click" , (e) => {

    let nombre = document.getElementById("nombre");
    let email = document.getElementById("email");
    let mensaje = document.getElementById("mensaje");

    //validación:

    nombre.value = "";
    email.value = "";
    mensaje.value = "";


});


//boton enviar:

btnenviar.addEventListener("click", (e) => {

    let nombre = document.getElementById("nombre");
    let email = document.getElementById("email");
    let mensaje = document.getElementById("mensaje");




    //validación de datos para boton enviar y localstorage de datos ingresados y enviados:

    nombre = nombre.value;

    localStorage.setItem("nombre", nombre);


    email = email.value;

    localStorage.setItem("email", email);


    mensaje = mensaje.value;

    localStorage.setItem("mensaje", mensaje);

})
