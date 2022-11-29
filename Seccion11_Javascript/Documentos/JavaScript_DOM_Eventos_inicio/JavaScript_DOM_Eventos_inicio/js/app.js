/**Maneras de seleccionar un elemento */


//querySelector
const heading = document.querySelector('#heading') // 0 a 1 elemento
console.log(heading)

//querySelectorAll
const enlaces = document.querySelectorAll('.navegacion a')
console.log(enlaces)

//getElementById
//const header2 = document.getElementById()

//Generar nuevo enlace

const nuevoEnlace = document.createElement('A')

nuevoEnlace.href = 'nuevo-enlace.html'

nuevoEnlace.textContent = 'Nuevo_Enlace'

nuevoEnlace.classList.add('navegacion__enlace')

//Eventos

/**Segun el evento ejecuta un tipo de accion, mas conocido como call back */

window.addEventListener('load', function () {
    console.log(9)
}) //este codigo se ejecuta cuando el programa esta listo


document.addEventListener('DOMContentLoaded', function () {
    console.log(7)
})//Espera a q se descargue el HTML