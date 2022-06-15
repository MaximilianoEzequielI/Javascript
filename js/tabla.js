//Segunda entrega del desafio final//Segunda entrega del desafio final//Segunda entrega del desafio final
//Segunda entrega del desafio final//Segunda entrega del desafio final//Segunda entrega del desafio final
//Segunda entrega del desafio final//Segunda entrega del desafio final//Segunda entrega del desafio final
 btnGuardar.addEventListener('click', () => {
     let val = document.getElementById("valorInput").value;
     localStorage.setItem("valorEnLS", val);
     document.getElementById("valorInput").value = "";
 })

 btnCargar.addEventListener('click', () => {
     let val = localStorage.getItem("valorEnLS");
     document.getElementById("valorDesdeLS").innerHTML = val;
 })

 btnBorrar.addEventListener('click', () => {
     document.getElementById("valorDesdeLS").innerHTML = "";
     localStorage.removeItem("valorEnLS");
 })

