/*1- Crea una web con bootstrap y js, que contenga un botón comenzar el juego, en
ese momento se crea un número aleatorio que el usuario deberá adivinar, la
interfaz del usuario debe tener además un input para ingresar un número y un
botón enviar, al presionar el botón enviar mostrar en un alert si el usuario adivino
o no el número mágico, si no lo adivino indicarle con un alert si el numero que
ingreso es mayor o menor al número mágico.
Cuando el usuario adivine el numero mostrar un mensaje indicando al usuario que
adivino el numero.


LEER: como la profe hizo este ejercicio en clases intenté hacer una solución alternativa

*/




class adivinaDado{ 

    constructor(numeroDado){
        this.numeroDado= numeroDado;  
         }
      
        mostrarDatos(){
            alert(`<h5>El número elegido para adivinar el dado es: <h5>
            <ol>
            <li>Dado: ${this.numeroDado}</li> 
            </ol>
            `)
           
          }


          tirarDado(){
            let numeroAdivinar = Math.floor(Math.random()*(6-1 +1) + 1)
            console.log(numeroAdivinar)
            if (this.numeroDado == numeroAdivinar){
                alert('Has ganado!!')
            }else{
                alert('probemos otra vez!')
            }
          }

                  
        set modificarnumeroDado(nuevonumeroDado){
            this.numeroDado = nuevonumeroDado
        }
               
       
}

function newDado (){
   let newadivinaDado1 = new adivinaDado ('xxx')
   newadivinaDado1.modificarnumeroDado = document.getElementsByClassName('inputNumero')[0].value;
  
   newadivinaDado1.mostrarDatos()
    
  }

  function probandoSuerte (){
    let newadivinaDado2 = new adivinaDado ('xxx')
    newadivinaDado2.modificarnumeroDado = document.getElementsByClassName('inputNumero')[0].value;
   
    newadivinaDado2.tirarDado()
     
   }


  
