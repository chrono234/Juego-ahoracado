function divujarCanvas(){
    tablero.lineWidth = 8;
    tablero.lineCap ="round"; //linea más redondeada
    tablero.lineJoin ="round"; 
    tablero.fillStyle ="#F3F5F6";
    tablero.strokeStyle ="#8a3871"; //borde de las lineas

    tablero.fillRect(0,0,660,400);
    tablero.beginPath();//camino
    tablero.moveTo( 400,300); //donde en el cambas se va a mover
    tablero.lineTo(210 ,300); //ejes x,y
    tablero.stroke();
    tablero.closePath();

}

function divujarLinea(){
    tablero.lineWidth = 6;
    tablero.lineCap ="round"; //linea más redondeada
    tablero.lineJoin ="round"; 
    tablero.fillStyle ="#F3F5F6";
    tablero.strokeStyle ="#8a3871"; //borde de las lineas

    //espacio reservado para los guiones, y se va a dividir entre la palabra secreta 600px/4, entonces cada vez que la condición se de se va a divujar la linea
    //HTML =["H","T","M","L"], la multiplicación por i se hace por que si no lo hacemos no iteraría por las demás letras, solo la primera letra "h", y por eso estamos sumando la anchura completa y que el espacio sea el mismo y para que cada una de las letras temga su guion divujado

    let anchura = 600/palabraSecreta.length;
    for (let i = 0; i < palabraSecreta.length; i++) {
        tablero.moveTo(90 + (anchura*i), 350); 
        tablero.lineTo(60 + (anchura*i), 350);
    }
    tablero.stroke();       //cerrar tablero
    tablero.closePath();  //cerrar camino 
}


