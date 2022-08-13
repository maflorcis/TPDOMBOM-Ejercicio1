class adivinaDado{ 

    constructor(numeroDado){
        this.numeroDado= numeroDado;  
         }
      
        mostrarDatos(){
            alert(`<h5>La persona tiene las siguientes características: <h5>
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


  
