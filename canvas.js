//¡divujar-canvas
function divujarCanvas() {
  tablero.lineWidth = 8;
  tablero.lineCap = "round";
  tablero.lineJoin = "round";
  tablero.fillStyle = "#F3F5F6";
  tablero.strokeStyle = "#5e6ce8";
  tablero.fillRect(0, 0, 660, 500);
}

//¡divujar-lineas-abajo
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
  tablero.strokeStyle = "#5e6ce8";

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
  tablero.strokeStyle = "#5e6ce8";

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
  tablero.strokeStyle = "#5e6ce8";

  tablero.beginPath();
  tablero.moveTo(365, 125);
  tablero.lineTo(365, 90);
  tablero.stroke();
  tablero.closePath();
}

//¡divujar-cara
function divujarCara() {
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

  finDelJuego();
  reinicio();
}

//¡divular-letra-correcta
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

//¡divujar-letra-incorrecta
function escribirLetraIncorrecta(letra, errorsLeft) {
  var errores = 7;
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

//¡divujar-letra-perdedor
function finDelJuego() {
  tablero.lineWidth = 5;
  tablero.lineCap = "round";
  tablero.lineJoin = "round";
  tablero.font = "bold 40px Inter";
  tablero.fillStyle = "#ff0000";
  tablero.fillText("Fin del juego!", 425, 200);
}

//¡divujar-letra-ganador
function ganadorJuego() {
  tablero.lineWidth = 5;
  tablero.lineCap = "round";
  tablero.lineJoin = "round";
  tablero.font = "bold 40px Inter";
  tablero.fillStyle = "#008000";
  tablero.fillText("Ganaste ", 0, 150);
  tablero.fillText("Felicidades!", 0, 210);
}

//¡background form codePen.io
function rain(el = document.body, params) {
  if (!el) {
    console.error("Must have element to populate the rain!");
    return;
  }
  const defaultProperties = {
    colors: "default",
    drop: window.innerHeight,
    fadeout: true,
    raindrops: 400,
    speed: 2000,
    splashes: true,
    spread: window.innerWidth,
  };

  // properties passed in from user onto the defaults
  const c = Object.assign(defaultProperties, params);

  const randInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  let hh = window.innerHeight;
  let ww = window.innerWidth;
  let raindrops = "";
  let rainsplashes = "";
  if (!c.flakes || Number.isNaN(c.flakes * 1)) {
    c.flakes = 250;
  }
  for (let i = 0; i < c.flakes; i++) {
    let dur = c.speed;
    raindrops += `<g transform="translate(${randInt(
      0,
      ww
    )} -26) scale(1.${randInt(0, 3)})">
		<rect id="snowflake${i}" fill="rgba(240, 240, 255, ${
      randInt(1, 10) / 10
    })" x="0" y="0" rx="1" height="${randInt(4, 10)}" width="${
      randInt(3, 5) / 10
    }" filter="url(#blur${randInt(1, 2)})">
		</rect>
	</g>
	<animateMotion xlink:href="#snowflake${i}" dur="${dur}ms" begin="-${
      randInt(0, 100) / 10
    }s" repeatCount="indefinite">
		<mpath xlink:href="#motionPath${randInt(1, 2)}" />
	</animateMotion>`;
    // animated circle splashes
    if (c.splashes) {
      if (randInt(0, 1) == 1) {
        let randTiming = -randInt(0, 10) / 10;
        rainsplashes += `<ellipse stroke="rgba(240, 240, 255, ${
          randInt(1, 4) / 10
        })" stroke-width="1" fill="none" cx="${randInt(0, ww)}" cy="${randInt(
          hh,
          hh / 1.2
        )}" rx="5" ry="3">
			<animate
				 attributeType="XML" attributeName="stroke-width"
				 dur="1s" values="0; 0.7; 0"
				 repeatCount="indefinite" begin="${randTiming}" />
			<animate
				 attributeType="XML" attributeName="rx"
				 dur="${c.speed / 2}ms" values="0; ${randInt(5, 9)}"
				 repeatCount="indefinite" additive="sum" begin="${randTiming}" />
			<animate
				 attributeType="XML" attributeName="ry"
				 dur="${c.speed / 2}ms" values="0; ${randInt(1, 2)}"
				 repeatCount="indefinite" additive="sum" begin="${randTiming}" />
				 <!--
			<animate
				 attributeType="XML" attributeName="cx"
				 dur="${c.speed / 2}ms" values="${randInt(0, ww)}; ${randInt(0, ww)}"
				 repeatCount="indefinite" additive="sum" begin="${randTiming}" />
				 -->
			</ellipse>`;
      }
    }
  }

  let svg = `<svg id="snowverlay" viewbox="0 0 ${ww} ${hh}" height="${hh}" width="${ww}" preserveAspectRatio="none" style="z-index:99999; user-select:none; pointer-events:none; top:50%;
	left:50%; position:fixed; transform:translate(-50%,-50%)">
	<filter id="blur1" x="-100%" y="-100%" width="300%" height="300%">
		<feGaussianBlur in="SourceGraphic" stdDeviation="1" />
	</filter>
	<filter id="blur2" x="-100%" y="-100%" width="300%" height="300%">
		<feGaussianBlur in="SourceGraphic" stdDeviation="2" />
	</filter>
	<path id="motionPath1" fill="none" stroke="none" d="M 0 -${hh * 0.1} V ${
    hh * 1.1
  }" />
	<path id="motionPath2" fill="none" stroke="none" d="M 0 -${hh * 0.1} V ${
    hh * 1.1
  }" />
	${raindrops}
	${rainsplashes}
</svg>`;
  //Make it a node to avoid the dangerous "document.body.innerHTML = svg"
  let wrapper = document.createElement("div");
  wrapper.innerHTML = svg;
  let doc = wrapper.firstChild;
  const element = document.getElementById("snowverlay");
  element?.remove();
  document.body.appendChild(doc);
}

window.onload = rain(document.body);
window.onresize = rain;
