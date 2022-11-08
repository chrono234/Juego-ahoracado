//¡selectors
let palabras = [
  "ALURA",
  "ORACLE",
  "TECHNO",
  "CSS",
  "PASS",
  "GITHUB",
  "CHECK",
  "HOUSE",
];
let canvas = document.querySelector("canvas");
let tablero = document.getElementById("horca").getContext("2d");
let botonGuardar = document.getElementById("btn-agregar-palabra");
let palabraSecreta = "";
let letras = [];
let letraElegida = [];
let errores = 7;



//¡default-start
document.getElementById("nueva-palabra").style.display = "none";
document.getElementById("aparece-horca").style.display = "none";

//¡Palabra-random
function escojerPalabraSecreta() {
  let palabra = palabras[Math.floor(Math.random() * palabras.length)];
  palabraSecreta = palabra;
}

//¡verify-keyboard-letter
function comprobarLetra(key) {
  let estado = false;
  if (
    (key >= 65 && letras.indexOf(key)) ||
    (key <= 90 && letras.indexOf(key) && typeof keyCode === "number")
  ) {
    letras.push(key);
    return estado;
  } else {
    estado = true;
    return estado;
  }
}

//¡Add-incorrect-letter
function anadirLetraIncorrecta() {
  errores -= 1;
}

//¡start-game
function iniciarJuego() {
  document.getElementById("btn-home").style.display = "none";
  document.getElementById("nueva-palabra").style.display = "none";
  document.getElementById("aparece-horca").style.display = "flex";
  escojerPalabraSecreta();
  divujarCanvas();
  divujarLinea();
  document.onkeydown = (e) => {
    let letra = e.key.toUpperCase();
          if (comprobarLetra(letra) && palabraSecreta.includes(letra)) {
            for (let i = 0; i < palabraSecreta.length; i++) {
              if (palabraSecreta[i] === letra) {
                escribirLetraCorrecta(i);
                verificarVencedor(letra)
              }
            }
          }else {
            anadirLetraIncorrecta(letra);
            escribirLetraIncorrecta(letra, errores);
          } 
        }
      }

//¡add-the-new-word
function agregarPalabra() {
  let palabraNueva = document.getElementById("palabra").value;
  palabras.push(palabraNueva.toUpperCase());
}

function AmacenarListaPalabrasEnNavegador() {
  localStorage.setItem("lista", palabras);
}

function cargarListaDePalabras() {
  listaDePalabras = localStorage.getItem("lista");
}
cargarListaDePalabras();

botonGuardar.addEventListener("click", () => {
  agregarPalabra();
  AmacenarListaPalabrasEnNavegador();
});

//¡go-to-menu-add-word
function irPalabra() {
  document.getElementById("btn-home").style.display = "none";
  document.getElementById("nueva-palabra").style.display = "flex";
  document.getElementById("aparece-horca").style.display = "none";
}

//¡add-word-and-goes-to-game
function addIrJuego() {
  document.getElementById("btn-home").style.display = "none";
  document.getElementById("nueva-palabra").style.display = "none";
  document.getElementById("aparece-horca").style.display = "flex";
}

//¡go-to-start
function irInicio() {
  document.getElementById("btn-home").style.display = "flex";
  document.getElementById("nueva-palabra").style.display = "none";
  document.getElementById("aparece-horca").style.display = "none";
}

//¡Validate-the-winnner
function verificarVencedor(letra) {
  letraElegida.push(letra.toUpperCase());
  if (letraElegida.length == palabraSecreta.length) {
    ganadorJuego();
    recargar();
  }
}

//¡reload
function recargar() {
  setTimeout(() => {
    location.reload(addIrJuego());
  }, 2000);
}

//¡message-defeat at the end
function derrotaReinicio() {
  setTimeout(() => {
    alert("Fin del juego! " + "La palabra era: " + palabraSecreta);
  }, 500);
}

//¡close-restart
function reinicio() {
  setTimeout(() => {
    0, 0, (canvas.width = canvas.width);
    palabraSecreta = [];
    letras = [];
    iniciarJuego();
  }, 800);
}

//¡draw-hanging-man
function dibujoHombreAhorcado(caso) {
  switch (caso) {
    case 1:
      divujarPiso();
      break;
    case 2:
      divujarLineaRecta();
      break;
    case 3:
      divujarLineaHorizontal();
      break;
    case 4:
      divujarhorca();
      break;
    case 5:
      divujarCara();
      break;
    case 6:
      divujarCuerpo();
      break;
    case 7:
      divujarBrazos();
    case 8:
      divujarPiernas();
    default:
      break;
  }
}

//CODE INPROVEMENT NOT APPLY, ON WORK

//Función para no repetir palabras
/*
const divujo= 1;

const dibujoHombreAhorcado = {
  piso:divujarPiso(),
  lineaVertical:divujarLineaRecta(),
  lineaHorizontal:divujarLineaHorizontal(),
  horca:divujarhorca(),
  cara:divujarCara(),
  cuerpo:divujarCuerpo(),
  brazos:divujarBrazos(),
  piernas:divujarPiernas()
}

const partesDelAhorcado = [
  "piso",
  "lineaVertical",
  "lineaHorizontal",
  "horca",
  "cara",
  "cuerpo",
  "brazos",
  "piernas"
]

function* gen() {
  for (let i = 0; i < dibujoHombreAhorcado.length; i++) {
      console.log(partesDelAhorcado [i] );
     yield;
  }
}

let generadora = gen();
generadora.next();

*/
