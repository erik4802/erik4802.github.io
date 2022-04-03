const titulo= document.querySelector(".title");
console.log(titulo);
const enlace=document.querySelectorAll("#menu  a");
console.log(enlace);
const seccion = document.getElementById("seccion");
console.log(seccion);
//generar codigo//
const nuevoenlace = document.createElement("a")
//<a href ="enlace.html">texto</a>//
//agregar el ref
nuevoenlace.href= "ayuda.html"
//agregar el texto//
nuevoenlace.textContent="ayuda"
//agregar una clase//
nuevoenlace.classList.add="enlace"
//Agregar al documento//
const navegacion= document.querySelector("#menu")
navegacion.appendChild(nuevoenlace)
//appendChild agrega un modo al final de la lista de un elemento hijo a un elemento padre especifico//
//eventos//
window.addEventListener("load", console.long (1))
window.onload= function()
{
  console.log(3)  
}
window.addEventListener("load", imprimir)
function imprimir()
(
    console.long(2)
)
//seleccionar elementos y asignar un evento//
const btnenviar= document.querySelector("#enviar")
btnenviar.addEventListener("cick", function()
{
        console.log(evento)
        evento.preventDefault();
        //ya no se va a recargar todo el formulario, se utiliza especialmente en forularios 
        console.log("enviando formulaios")
    });
