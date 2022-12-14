//¡draw-canvas
function divujarCanvas() {
  tablero.lineWidth = 8;
  tablero.lineCap = "round";
  tablero.lineJoin = "round";
  tablero.fillStyle = "#F3F5F6";
  tablero.strokeStyle = "#5e6ce8";
  tablero.fillRect(0, 0, 660, 500);
}

//¡draw-floor-line
function divujarLinea() {
  tablero.lineWidth = 6;
  tablero.lineCap = "round";
  tablero.lineJoin = "round";
  tablero.fillStyle = "#F3F5F6";
  tablero.strokeStyle = "#5e6ce8";

  let anchura = 600 / palabraSecreta.length;
  for (let i = 0; i < palabraSecreta.length; i++) {
    tablero.moveTo(90 + anchura * i, 350);
    tablero.lineTo(60 + anchura * i, 350);
  }
  tablero.stroke();
  tablero.closePath();
}

//¡draw-floor
function divujarPiso() {
  tablero.beginPath();
  tablero.moveTo(400, 300);
  tablero.lineTo(210, 300);
  tablero.stroke();
  tablero.closePath();
}

//¡draw-vertical-line
function divujarLineaRecta() {
  tablero.lineWidth = 8;
  tablero.lineCap = "round";
  tablero.lineJoin = "round";
  tablero.fillStyle = "#F3F5F6";
  tablero.strokeStyle = "#5e6ce8";

  tablero.fillRect(200, 50, 100, 100);
  tablero.beginPath();
  tablero.moveTo(290, 90);
  tablero.lineTo(290, 298);
  tablero.stroke();
  tablero.closePath();
}

//¡draw-horizontal-line
function divujarLineaHorizontal() {
  tablero.lineWidth = 8;
  tablero.lineCap = "round";
  tablero.lineJoin = "round";
  tablero.fillStyle = "#F3F5F6";
  tablero.strokeStyle = "#5e6ce8";

  tablero.beginPath();
  tablero.moveTo(365, 88);
  tablero.lineTo(290, 88);
  tablero.stroke();
  tablero.closePath();
}

//¡draw-hang
function divujarhorca() {
  tablero.lineWidth = 8;
  tablero.lineCap = "round";
  tablero.lineJoin = "round";
  tablero.fillStyle = "#F3F5F6";
  tablero.strokeStyle = "#5e6ce8";

  tablero.beginPath();
  tablero.moveTo(365, 125);
  tablero.lineTo(365, 90);
  tablero.stroke();
  tablero.closePath();
}

//¡draw-head
function divujarCara() {
  tablero.beginPath();
  tablero.arc(365, 145, 18, 0, Math.PI * 2, true);
  tablero.stroke();
  tablero.closePath();
}

//¡draw-body
function divujarCuerpo() {
  tablero.moveTo(365, 227);
  tablero.lineTo(365, 163);
  tablero.stroke();
  tablero.closePath();
}

//¡draw-arms
function divujarBrazos() {
  tablero.beginPath();
  tablero.moveTo(365, 163);
  tablero.lineTo(390, 205);
  tablero.moveTo(365, 163);
  tablero.lineTo(340, 205);
  tablero.stroke();
  tablero.closePath();
}

//¡ draw-legs--+menssage-end-game
function divujarPiernas() {
  tablero.beginPath();
  tablero.moveTo(365, 230);
  tablero.lineTo(385, 265);
  tablero.moveTo(365, 165);
  tablero.lineTo(345, 265);
  tablero.stroke();
  tablero.closePath();

  finDelJuego();
  reinicio();
}

//¡draw-corrrect-letter
function escribirLetraCorrecta(index) {
  tablero.font = "bold 40px Inter";
  tablero.lineWidth = 6;
  tablero.lineCap = "round";
  tablero.lineJoin = "round";
  tablero.fillStyle = "#5e6ce8";

  let anchura = 600 / palabraSecreta.length;
  tablero.fillText(palabraSecreta[index], 60 + anchura * index, 343);
  tablero.stroke();
}

//¡draw-incorrect-letter
function escribirLetraIncorrecta(letra, errorsLeft) {
  let errores = 7;
  tablero.font = "bold 40px Inter";
  tablero.lineWidth = 6;
  tablero.lineCap = "round";
  tablero.lineJoin = "round";
  tablero.fillStyle = "#5e6ce8";
  tablero.fillText(letra, 10 + 40 * (11 - errorsLeft), 400, 12);

  letras.push(letra.toUpperCase());
  dibujoHombreAhorcado(letras.length);
  if (letras.length == errores) {
    derrotaReinicio();
  }
}

//¡draw-letter-end-game
function finDelJuego() {
  tablero.lineWidth = 5;
  tablero.lineCap = "round";
  tablero.lineJoin = "round";
  tablero.font = "bold 35px Inter";
  tablero.fillStyle = "#ff0000";
  tablero.fillText("Fin del juego!", 392, 200);
}

//¡draw-message-winner
function ganadorJuego() {
  tablero.lineWidth = 5;
  tablero.lineCap = "round";
  tablero.lineJoin = "round";
  tablero.font = "bold 40px Inter";
  tablero.fillStyle = "#008000";
  tablero.fillText("Ganaste ", 0, 150);
  tablero.fillText("Felicidades!", 0, 210);
}


