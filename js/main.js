// Inicializacion de variables
let cajasDestapadas = 0;
let caja1 = null;
let caja2 = null;
let primerResultado = null;
let segundoResultado = null;
let movimientos = 0;
let aciertos = 0;
let temporizador = false;
let timer = 30;
let timerInicial = 30;
let tiempoRegresivo = null;
const autenticado = confirm("¿Esta autenticado?");
const start = Swal.fire("¿Desea empezar? Ten en cuenta que tienes 30 segundos de tiempo y el tiempo es oro. Suerte!");

// Apuntando a documento HTML
let mostrarMovimientos = document.getElementById('movimientos');
let mostrarAciertos = document.getElementById('aciertos');
let mostrarTiempo = document.getElementById('t-restante');

// Generacion de numeros aleatorios

//No puedo aplicar Spread de Arrays porque trabajo funciones que no funcionan recibiendo arrays sino una serie de parámetros individuales
//No puedo aplicar Spread de Arrays porque trabajo funciones que no funcionan recibiendo arrays sino una serie de parámetros individuales

let numerosone = [1, 1, 2, 2, 3, 3, 4, 4] //Desafío: Incorporar Arrays////Desafío: Incorporar Arrays////Desafío: Incorporar Arrays////Desafío: Incorporar Arrays//
let numerostwo = [5, 5, 6, 6, 7, 7, 8, 8] //Desafío: Incorporar Arrays////Desafío: Incorporar Arrays////Desafío: Incorporar Arrays////Desafío: Incorporar Arrays//
let numeros = numerosone.concat(numerostwo)
numeros = numeros.sort(() => {
    return Math.random() - 0.5
});


//Desafio complementario Optimizando el proyecto final //Desafio complementario Optimizando el proyecto final //Desafio complementario Optimizando el proyecto final //Desafio complementario Optimizando el proyecto final
//Desafio complementario Optimizando el proyecto final //Desafio complementario Optimizando el proyecto final //Desafio complementario Optimizando el proyecto final //Desafio complementario Optimizando el proyecto final

    //condicion  ?  caso1  :  caso2

    console.log(autenticado && start ? 'Si esta autenticado' : 'No esta autenticado')

    //Ternario anidado
    
    console.log(autenticado? start? 'Si, desea empezar' : 'Esta autenticado pero no desea empezar' : "no esta autenticado")
    
    console.log(numeros);

    //No puedo aplicar Spread de Arrays porque trabajo funciones que no funcionan recibiendo arrays sino una serie de parámetros individuales

//Desafio complementario Optimizando el proyecto final //Desafio complementario Optimizando el proyecto final //Desafio complementario Optimizando el proyecto final //Desafio complementario Optimizando el proyecto final
//Desafio complementario Optimizando el proyecto final //Desafio complementario Optimizando el proyecto final //Desafio complementario Optimizando el proyecto final //Desafio complementario Optimizando el proyecto final

    


//Funciones//Funciones//Funciones//Funciones//Funciones//Funciones//Funciones//Funciones//Funciones//Funciones//Funciones//Funciones//Funciones//Funciones//Funciones
//Funciones//Funciones//Funciones//Funciones//Funciones//Funciones//Funciones//Funciones//Funciones//Funciones//Funciones//Funciones//Funciones//Funciones//Funciones
function contarTiempo(){ 
    tiempoRegresivoId = setInterval(()=>{
        timer--;
        mostrarTiempo.innerHTML = `Tiempo: ${timer} segundos`;
        if(timer == 0){ 
            clearInterval(tiempoRegresivoId);
        }
    },1000); 
}


//funcion principal//funcion principal//funcion principal//funcion principal//funcion principal//funcion principal//funcion principal//funcion principal//funcion principal//
//funcion principal//funcion principal//funcion principal//funcion principal//funcion principal//funcion principal//funcion principal//funcion principal//funcion principal//
function destapar(id) {
    if(temporizador == false){
        contarTiempo();
        temporizador = true;
    }
    

    cajasDestapadas++;
    console.log(cajasDestapadas);


    if (cajasDestapadas == 1) {
        //Mostrar primer numero "caja1"
        caja1 = document.getElementById(id);
        primerResultado = numeros[id]
        caja1.innerHTML = `<img src="../images/${primerResultado}.jpg" alt="">`;  //primerResultado

        //Deshabilitar primer boton
        caja1.disabled = true;
    } else if (cajasDestapadas == 2) {
        //Mostrar segundo numero "caja2"
        caja2 = document.getElementById(id);
        segundoResultado = numeros[id];
        caja2.innerHTML = `<img src="../images/${segundoResultado}.jpg" alt="">`; //segundoResultado

        //deshabilitar segundo boton
        caja2.disabled = true;

        //Incrementar movimientos
        movimientos++;
        mostrarMovimientos.innerHTML = `movimientos: ${movimientos}`;
        if (primerResultado == segundoResultado) {
            // Encerrar contador cajas destapadas
            cajasDestapadas = 0;

            // Aumentar aciertos
            aciertos++;
            mostrarAciertos.innerHTML = `aciertos: ${aciertos}`;

            if (aciertos == 8) {
                clearInterval(tiempoRegresivoId);
                mostrarAciertos.innerHTML = `aciertos: ${aciertos} Nada mal...`
                mostrarTiempo.innerHTML = `Fantástico! Tardaste sólo ${timerInicial - timer} segundos`
                mostrarMovimientos.innerHTML = `movimientos: ${movimientos}` 
                Swal.fire("Increible, lo lograste");
            }
            } else {
                // Mostrar momentaneamente valores de las cajas y volver a tapar.
                setTimeout(() => { //Aplicando funcion flecha! 
                    caja1.innerHTML = ' ';
                    caja2.innerHTML = ' ';
                    caja1.disabled = false;
                    caja2.disabled = false;
                    cajasDestapadas = 0;
                }, 1000); //1000 hace referencia a milisegundo, entonces es equivalente a 1 segundo
            }
        }

    }
