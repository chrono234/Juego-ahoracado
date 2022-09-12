//selectores
let palabras = ["ALURA", "ORACLE", "TECHNO", "INSULAR","PASS", "GITHUB"];
let tablero = document.getElementById("forca").getContext("2d");
let palabraSecreta = "";

function escojerPalabraSecreta() {
    let palabra = palabras[Math.floor(Math.random() * palabras.length)]
    palabraSecreta = palabra
    console.log(palabraSecreta);
}

//iniciar juego
function iniciarJuego() {
    document.getElementById("iniciar-juego").style.display = "none";

    escojerPalabraSecreta()
    divujarCanvas()
    divujarLinea()
}