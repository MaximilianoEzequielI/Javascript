//Desafío: Incorporar eventos//Desafío: Incorporar eventos//Desafío: Incorporar eventos//Desafío: Incorporar eventos//Desafío: Incorporar eventos//Desafío: Incorporar eventos
//Desafío: Incorporar eventos//Desafío: Incorporar eventos//Desafío: Incorporar eventos//Desafío: Incorporar eventos//Desafío: Incorporar eventos//Desafío: Incorporar eventos
let modalBtn = document.querySelector('.modal-btn');
let modalBg = document.querySelector('.modal-bg');
let modalClose = document.querySelector('.modal-close');
modalBtn.addEventListener('click', function(){  
    modalBg.classList.add('bg-active');
});
modalClose.addEventListener('click', function(){    
    modalBg.classList.remove('bg-active');
});

const btnEmpezar = document.getElementById('btnEmpezar');

cargarEventos();

function cargarEventos() {  
    btnEmpezar.addEventListener('click', verificar);

}

function verificar(e) { 
    e.preventDefault();

    let nombre = document.getElementById('name').value;
    let apellido = document.getElementById('lastname').value;

    console.log(nombre); 
}



//scroll up//scroll up//scroll up//scroll up//scroll up//scroll up//scroll up//scroll up//scroll up//scroll up//scroll up//scroll up//scroll up//scroll up//scroll up//scroll up//
//scroll up//scroll up//scroll up//scroll up//scroll up//scroll up//scroll up//scroll up//scroll up//scroll up//scroll up//scroll up//scroll up//scroll up//scroll up//scroll up//
document.getElementById("button-up").addEventListener("click", scrollUp);

function scrollUp(){    
    var currentScroll = document.documentElement.scrollTop;
    if (currentScroll > 0){ 
        window.requestAnimationFrame(scrollUp);
        window.scrollTo (0 ,currentScroll - (currentScroll/70));
    }
}
