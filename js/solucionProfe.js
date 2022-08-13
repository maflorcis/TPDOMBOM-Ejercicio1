/*
        1- Crea una web con bootstrap y js, que contenga un botón comenzar el juego, en
ese momento se crea un número aleatorio que el usuario deberá adivinar, 
la interfaz del usuario debe tener además un input para ingresar un número y un
botón enviar, 
al presionar el botón enviar mostrar en un alert si el usuario adivino
o no el número mágico,
si no lo adivino indicarle con un alert si el numero que ingreso es mayor o menor al número mágico.
Cuando el usuario adivine el numero mostrar un mensaje indicando al usuario que adivino el numero.
*/



/* ALTERNATIVA QUE EMPECÉ ANTES DE LA CLASE DE 09/08/2022

function tirarDado(){
    let form = document.createElement("form");
    let crearInput = document.createElement("input");
    crearInput.setAttribute("type", "number");
    crearInput.setAttribute("class", "tirarDadoUno");
    crearInput.setAttribute("min", "1");
    crearInput.setAttribute("max", "6");
    crearInput.setAttribute("placeholder", "número");
    let crearButton = document.createElement("button");
    crearButton.setAttribute("type", "submit");
    crearButton.setAttribute("class", "btn btn-primary mb-2");
    crearButton.setAttribute("onclick", "compararDado()");
    crearButton.setAttribute("placeholder", "Submit");
    form.appendChild(crearInput);
    form.appendChild(crearButton);
    document.getElementsByClassName("dadoUno")[0]
    .appendChild(form);
    
}




function compararDado(){
  let min = 1;
  let max = 6;
  let dadoUno = Math.floor(Math.random() * (max - min + 1) + min);
  console.log(dadoUno)
    let valor = document.getElementsByClassName('tirarDadoUno')[0].value;
    if(dadoUno == valor){
        alert("¡Acertaste! Tu número "+valor+" es igual al número mágico "+ dadoUno+".")
    }
    else if (dadoUno < valor){
        alert("¡Fallaste! Tu número " +valor+ " es mayor al número mágico " +dadoUno+".")
    }
    else if (dadoUno > valor){
        alert("¡Fallaste! Tu número " +valor+ " es menor al número mágico " +dadoUno+".")
    }
}

 

 function myDados() {
                 
    // Accessing input value

    let min = 1;
    let max = 6;
    let tirarDadoDos =
    document.getElementById("myDado").valued  = Math.floor(Math.random() * (max - min + 1) + min);
    document.getElementById("dadoDos").innerHTML =
    "El valor del dado es " + tirarDadoDos;
        
}


*/

//ALTERNATIVA DE LA PROFE

let numeroAdivinar = 0;
let formulario = document.querySelector('#formulario');
console.log(formulario)
//agregar eventos desde js
formulario.addEventListener('submit', adivinar);

function comenzarJuego(){
   numeroAdivinar = Math.floor(Math.random()*(6-1 +1) + 1)
    console.log(numeroAdivinar)
}

function adivinar(e){
    e.preventDefault();
    console.log('desde la funcion submit');
    let numeroIngresado = document.querySelector('#inputAdivinar').value;
    console.log(numeroIngresado)
    if(numeroIngresado == numeroAdivinar){
        alert('Adivinaste!')
    }else if (numeroAdivinar < numeroIngresado){
        alert("¡Fallaste! Tu número " +numeroIngresado+ " es mayor al número mágico " +numeroAdivinar+".")
    }
    else{
        alert("¡Fallaste! Tu número " +numeroIngresado+ " es menor al número mágico " +numeroAdivinar+".")
    }
}