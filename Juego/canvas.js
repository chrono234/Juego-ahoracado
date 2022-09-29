//¡divujar-canvas
function divujarCanvas() {
  tablero.lineWidth = 8;
  tablero.lineCap = "round"; 
  tablero.lineJoin = "round";
  tablero.fillStyle = "#F3F5F6";
  tablero.strokeStyle = "#8a3871"; 
  tablero.fillRect(0, 0, 660, 500);
}

//¡divujar-lineas-abajo
function divujarLinea() {
  tablero.lineWidth = 6;
  tablero.lineCap = "round";
  tablero.lineJoin = "round";
  tablero.fillStyle = "#F3F5F6";
  tablero.strokeStyle = "#8a3871";

  let anchura = 600 / palabraSecreta.length;
  for (let i = 0; i < palabraSecreta.length; i++) {
    tablero.moveTo(90 + anchura * i, 350);
    tablero.lineTo(60 + anchura * i, 350);
  }
  tablero.stroke(); 
  tablero.closePath(); 
}

//¡divujar-Piso
function divujarPiso() {
  tablero.beginPath(); 
  tablero.moveTo(400, 300);
  tablero.lineTo(210, 300); 
  tablero.stroke();
  tablero.closePath();
}

//¡divujar-linea-vertical
function divujarLineaRecta() {
  tablero.lineWidth = 8;
  tablero.lineCap = "round"; 
  tablero.lineJoin = "round";
  tablero.fillStyle = "#F3F5F6";
  tablero.strokeStyle = "#8a3871"; 

  tablero.fillRect(200, 50, 100, 100);
  tablero.beginPath(); 
  tablero.moveTo(290, 90); 
  tablero.lineTo(290, 298); 
  tablero.stroke();
  tablero.closePath();
}

//¡divujar-linea-horizontal
function divujarLineaHorizontal() {
  tablero.lineWidth = 8;
  tablero.lineCap = "round"; 
  tablero.lineJoin = "round";
  tablero.fillStyle = "#F3F5F6";
  tablero.strokeStyle = "#8a3871"; 

  tablero.beginPath(); 
  tablero.moveTo(365, 88); 
  tablero.lineTo(290, 88); 
  tablero.stroke();
  tablero.closePath();
}

//¡divujar-horca
function divujarhorca() {
  tablero.lineWidth = 8;
  tablero.lineCap = "round"; 
  tablero.lineJoin = "round";
  tablero.fillStyle = "#F3F5F6";
  tablero.strokeStyle = "#8a3871"; 

  tablero.beginPath();
  tablero.moveTo(365, 125);
  tablero.lineTo(365, 90);
  tablero.stroke();
  tablero.closePath();
}

//¡divujar-cara
function divujarCara(){
  tablero.beginPath();
  tablero.arc(365, 145, 18, 0, Math.PI * 2, true);
  tablero.stroke();
  tablero.closePath();
}

//¡divujar-cuerpo
function divujarCuerpo() {
  tablero.moveTo(365, 227);
  tablero.lineTo(365, 163); 
  tablero.stroke();
  tablero.closePath();
}

//¡divujar-brazos
function divujarBrazos() {
  tablero.beginPath();
  tablero.moveTo(365, 163);
  tablero.lineTo(390, 205); 
  tablero.moveTo(365, 163);
  tablero.lineTo(340, 205); 
  tablero.stroke();
  tablero.closePath();
}

//¡ divujar-piernas--mensaje-fin-del-juego
function divujarPiernas() {
  tablero.beginPath();
  tablero.moveTo(365, 230);
  tablero.lineTo(385, 265);
  tablero.moveTo(365, 165);
  tablero.lineTo(345, 265);
  tablero.stroke();
  tablero.closePath();

  finDelJuego()
}

//¡divular-letra-correcta
function escribirLetraCorrecta(index) {
  tablero.font = "bold 40px Inter";
  tablero.lineWidth = 6;
  tablero.lineCap = "round";
  tablero.lineJoin = "round";
  tablero.fillStyle = "#8A3871";

  let anchura = 600 / palabraSecreta.length;
  tablero.fillText(palabraSecreta[index], 60 + anchura * index, 343);
  tablero.stroke();
  }
  
//¡divujar-letra-incorrecta
function escribirLetraIncorrecta(letra, errorsLeft) {
  var errores = 7
  tablero.font = "bold 40px Inter";
  tablero.lineWidth = 6;
  tablero.lineCap = "round";
  tablero.lineJoin = "round";
  tablero.fillStyle = "#8A3871";
  tablero.fillText(letra, 10 + 40 * (11 - errorsLeft), 400, 12);
  
  letras.push(letra.toUpperCase());
  dibujoHombreAhorcado(letras.length);
  if ( letras.length == errores) {
    derrotaReinicio();
  }
}

  //¡divujar-letra-perdedor
  function finDelJuego() { 
    tablero.lineWidth = 5;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.font = "bold 40px Inter";
    tablero.fillStyle = "#ff0000";
    tablero.fillText("Fin del juego!",425,200);
  }

  //¡divujar-letra-ganador
  function GanadorJuego() { 
    tablero.lineWidth = 5;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.font = "bold 40px Inter";
    tablero.fillStyle = "#008000";
    tablero.fillText("Ganaste",0,150);
    tablero.fillText("Felicidades!",0,210);
  }


  //*agregar-nueva-palabra
  function agregaPalabra() {
    let input = document.getElementById("palabra")
    let palabra = input.value
  palabra = palabra.toUpperCase(palabra);
  palabras.push(palabra)
  console.log(palabras);
}  

