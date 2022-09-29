//¡selectores
let palabras = ["ALURA", "ORACLE", "TECHNO", "CSS", "PASS", "GITHUB", "CHECK","HOUSE"];
let canvas = document.querySelector("canvas");
let tablero = document.querySelector(".horca").getContext("2d");
let palabraSecreta = [];
let letras = []; 
let errores = 7; 

//¡default-start
document.getElementById("nueva-palabra").style.display = "none";
document.getElementById("aparece-horca").style.display = "none";

//¡Palabra-random
function escojerPalabraSecreta() {
  let palabra = palabras[Math.floor(Math.random() * palabras.length)];
  palabraSecreta = palabra;
  console.log(palabraSecreta);
}

//¡teclado-letra-random
function comprobarLetra(key) {
  let estado = false;
  if (
    (key >= 65 && letras.indexOf(key)) ||
    (key <= 90 && letras.indexOf(key))
  ) {
    letras.push(key);
    console.log(key);
    return estado;
  } else {
    estado = true;
    //console.log(key);
    return estado;
  }
}

//¡Añadir-letra-abajo
function anadirLetraIncorrecta() {
  errores -= 1;
  console.log(errores);
}

  //¡iniciar-juego
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
              console.log(gen.next().value);
              Ganador();
            }
          }
        } else {
          anadirLetraIncorrecta(letra);
          escribirLetraIncorrecta(letra, errores);
        }
      }
      }

  //¡agregar-nueva-palabra
  function agregarPalabra() {
    let input = document.getElementById("palabra")
    let palabra = input.value
    palabra = palabra.toUpperCase(palabra);
    palabras.push(palabra)
    console.log(palabras);
}

  //¡ir-de-inicio-a-palabra
  function irPalabra() {
    document.getElementById("btn-home").style.display = "none";
    document.getElementById("nueva-palabra").style.display = "flex";
    document.getElementById("aparece-horca").style.display = "none";
}

  //¡agregar-palabra-e-ir-juego  
  function addIrJuego() {
    document.getElementById("btn-home").style.display = "none";
    document.getElementById("nueva-palabra").style.display = "none";
    document.getElementById("aparece-horca").style.display = "flex";
    agregarPalabra()
} 

//¡ir-inicio
function irInicio() {
    document.getElementById("btn-home").style.display = "flex";
    document.getElementById("nueva-palabra").style.display = "none";
    document.getElementById("aparece-horca").style.display = "none";
}


    //¡Validar-Ganador
    var contador = -1;
    function* validarEntrada() {
      while (contador < 7)
      yield contador++
    }

    var gen = validarEntrada();
    console.log(gen.next().value);
    
  function Ganador() {
    if (contador == palabraSecreta.length ) {
      setTimeout(() => {
        GanadorJuego()
      }, 350);
    }
    }

//¡derrota
function derrotaReinicio() {
  setTimeout(() => {
    alert("Fin del juego! " +"La palabra era: " + palabraSecreta)
  }, 500);
}

/*//¡cierre-reinicio
function cierreReinicio() {
  document.getElementById("modal-oculto").classList.remove("modal-visible");
  tablero.clearRect(0, 0, 1200, 600);
  aciertos = [];
  yerros = [];
  iniciarJuego();
}*/

//¡funcion-ahorcado
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

/*
const divujo= 1

const dibujoHombreAhorcado = {
  1:divujarPiso(),
  2:divujarLineaRecta(),
  3:divujarLineaHorizontal(),
  4:divujarhorca(),
  5:divujarCara(),
  6:divujarCuerpo(),
  7:divujarBrazos(),
  8:divujarPiernas(),
}
let canvas =2

console.log(divujoObj[divujo] || 1 );


console.log(canvas);*/