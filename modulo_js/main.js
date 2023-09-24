/**
 * Funcionalidad de menu desplegable
 */

const navMenu = document.querySelector("#nav-menu");
const abrirMenu = document.querySelector("#btn-abrir-menu");
const cerrarMenu = document.querySelector("#btn-cerrar-menu");

abrirMenu.addEventListener("click", () => {
    navMenu.classList.add("visible");
})

cerrarMenu.addEventListener("click", () => {
    navMenu.classList.remove("visible");
})

// funcion SLIDER

let imagenes = [
    "css/images/border-coli-corriendo.jpeg",
    "css/images/perros-ninos-fb.png",
    "css/images/mordiendo-zapatilla.jpg"
];
document.imagen.src = imagenes[0];

const sliderDerecho = document.querySelector(".slider-derecho");
const sliderIzquierdo = document.querySelector(".slider-izquierdo");
let contador = 0;

function moverDerecha() {
    contador++;
    if (contador > imagenes.length -1) {
        contador = 0;
    }
    document.imagen.src = imagenes[contador]; //visualizamos la imagen
}
sliderDerecho.addEventListener("click", moverDerecha); 

function moverIzquierda() {
    contador--;
    if (contador < 0) {
        contador = imagenes.length -1;
    }
    document.imagen.src = imagenes[contador];
}
sliderIzquierdo.addEventListener("click", moverIzquierda);
