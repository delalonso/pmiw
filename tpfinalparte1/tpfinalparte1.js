//Delfina Alonso - COM3 - legajo: 125506/3
//link con acceso al video de Delfina Alonso: https://youtu.be/PCTwhDqfdQo?si=4v_iaVe6F9sWS-r8
 //Dupla: Delfina Alonso y Brenda Baños (explicacion del codigo oralmente anoto el profe)
// (diagrama de flujo subido como archivo PDF)
let pantalla = 0;
let frame = [];
let frameactual = 0;
let imagenes = [];     

let decoracion = "";    
let invitados = "";
let musica = "";
let actividad = "";
let musicatranquila;
let musicafuerte;
  
let nombres = [
"pantalla1.png",
"pantalla2.png",
"pantalla3a.png",
"pantalla3b.png",
"pantalla4.png",
"pantalla4a.png",
"pantalla4b.png",
"pantalla5.png",
"pantalla6a1.png",
"pantalla6a2.png",
"pantalla6b1.png",
"pantalla6b2.png",
"pantalla7.png",
"pantalla8a1.png",
"pantalla8a2.png",
"pantalla8b1.png",
"pantalla8b2.png",
"finalcaotico.png",
"finalperfecto.png",
"finaltranquilo.png"
];
 
let mifuente;

function preload() {
musicatranquila = loadSound("data/musica_tranquila.mp3");
musicafuerte = loadSound("data/musica_fuerte.mp3");
} 

function setup() { 
createCanvas(800, 450);
background("#FFD3FC");      

for (let i = 0; i <= 4; i++) {
frame[i] = loadImage("data/frame" + i + ".png");
}

for (let i = 0; i < nombres.length; i++) {
imagenes[i] = loadImage("data/" + nombres[i]); 
}

mifuente = loadFont("data/BerlinSansFB-Bold-4  8.vlw");
}

function draw() {
background("#FFD3FC");
textFont(mifuente);

// PANTALLA INICIO
if (pantalla == 0) {
dibujarTextoFondo(
  "UN CUMPLEAÑOS, DISTINTAS FORMAS DE VIVIRLO",
  "¡Hoy es tu cumpleaños! Tenés todo el día por delante y una fiesta que organizar.",
  "¿Cómo sera tu cumpleaños?" );

noStroke();
fill(255);
rect(220, 265, 320, 40);

fill(0); 
textSize(25);
textFont("MicrosoftYaHeiUI-48");
text("¿Como sera este cumpleaños?", 230, 292);
}

// PANTALLA 1
if (pantalla == 1) {
image(imagenes[0], 0, 0, 800, 450);

dibujarTextoFondo("¿Como comienza tu día?");

dibujarBoton("Seguir durmiendo", 100, 265, 187, 40, 105, 290);
dibujarBoton("Levantarse temprano", 510, 265, 198, 40, 515, 290);
}

// PANTALLA 2
if (pantalla == 2) {
image(imagenes[1], 0, 0, 800, 450);

dibujarTextoFondo(
  "Seguiste durmiendo...",
  "Ahora tenés menos tiempo para preparar la fiesta.",
  "¿Cómo desayunás?"
);

dibujarBoton("Tranquilo", 100, 300, 190, 40, 145, 325);
dibujarBoton("Rapido", 510, 300, 190, 40, 570, 325);
}

// PANTALLA 3
if (pantalla == 3) {
image(imagenes[1], 0, 0, 800, 450);

dibujarTextoFondo(
  "Te levantaste temprano...",
  "Ahora tenés más tiempo para preparar la fiesta.",
  "¿Cómo desayunas?"
);

dibujarBoton("Tranquilo", 100, 300, 190, 40, 145, 325);
dibujarBoton("Rápido", 510, 300, 190, 40, 570, 325);
}  

// PANTALLA 4
if (pantalla == 4) {
image(imagenes[2], 0, 0, 800, 450);

dibujarTextoFondo(
  "Desayunaste tranquilo...",
  "Disfrutaste la mañana y tenés todo listo para seguir.",
  "¿Cómo preparás el lugar?"
);

dibujarBoton("Decoración simple", 100, 300, 220, 40, 125, 325);
dibujarBoton("Muchas decoraciones", 480, 300, 220, 40, 495, 325);
}

// PANTALLA 5
if (pantalla == 5) {
image(imagenes[3], 0, 0, 800, 450);

dibujarTextoFondo(
  "Desayunaste rápido...",
  "Ganaste tiempo para seguir preparando la fiesta.",
  "¿Cómo preparás el lugar?"
);

dibujarBoton("Decoración simple", 100, 300, 220, 40, 125, 325);
dibujarBoton("Muchas decoraciones", 480, 300, 220, 40, 495, 325);
}

// PANTALLA 6
if (pantalla == 6) {
image(imagenes[5], 0, 0, 800, 450);

dibujarTextoFondo(
  "Preparaste una decoración simple...",
  "Todo quedó lindo y ordenado.",
  "¿Cuántos invitados tenés?"
);

dibujarBoton("Pocos", 100, 300, 190, 40, 155, 325);
dibujarBoton("Muchos", 510, 300, 190, 40, 565, 325);
}

// PANTALLA 7
if (pantalla == 7) {
image(imagenes[6], 0, 0, 800, 450);

dibujarTextoFondo(
  "Preparaste muchas decoraciones...",
  "El lugar quedó lleno de colores y detalles.",
  "¿Cuántos invitados tenés?"
);

dibujarBoton("Pocos", 100, 300, 190, 40, 155, 325);
dibujarBoton("Muchos", 510, 300, 190, 40, 565, 325);
}

// PANTALLA 8
if (pantalla == 8) {
image(imagenes[8], 0, 0, 800, 450);

dibujarTextoFondo(
  "Una fiesta íntima...",
  "Elegiste una decoración simple y pocos invitados.",
  "El ambiente es tranquilo."
);

dibujarBoton("Continuar", 300, 300, 200, 40, 350, 325);
}

// PANTALLA 9
if (pantalla == 9) {
image(imagenes[9], 0, 0, 800, 450);

dibujarTextoFondo( 
  "Una gran reunión...",
  "La decoración es simple, pero vino mucha gente.",
  "Hay muchas conversaciones y nuevos encuentros."
);

dibujarBoton("Continuar", 300, 300, 200, 40, 350, 325);
}

// PANTALLA 10
if (pantalla == 10) {
image(imagenes[10], 0, 0, 800, 450);

dibujarTextoFondo(
  "Muchos detalles...",
  "Preparaste una decoración llena de colores.",
  "Aunque hay pocos invitados, el ambiente es festivo."
);

dibujarBoton("Continuar", 300, 300, 200, 40, 350, 325);
}

// PANTALLA 11
if (pantalla == 11) {
image(imagenes[11], 0, 0, 800, 450);

dibujarTextoFondo(
  "Una celebración más grande...",
  "Tu fiesta está llena de decoraciones y personas.",
  "Todo está listo para una noche muy animada."
);

dibujarBoton("Continuar", 300, 300, 200, 40, 350, 325);
}

// PANTALLA 12
if (pantalla == 12) {
image(imagenes[12], 0, 0, 800, 450);

dibujarTextoFondo(
  "¿Qué música elegís?",
  "Ahora que llegaron tus invitados es momento de decidir el ambiente de la fiesta."
);

dibujarBoton("Música tranquila", 80, 300, 280, 45, 125, 328);
dibujarBoton("Música fuerte y animada", 440, 300, 280, 45, 450, 328);
}

// PANTALLA 13
if (pantalla == 13) {
image(imagenes[12], 0, 0, 800, 450);

dibujarTextoFondo(
  "¿Qué querés hacer ahora?",
  "Elegí cómo querés compartir este momento."
);

dibujarBoton("Fotos y conversar", 80, 300, 280, 45, 115, 328);
dibujarBoton("Bailar", 440, 300, 280, 45, 550, 328);
}

// PANTALLA 14
if (pantalla == 14) {
image(imagenes[13], 0, 0, 800, 450);

dibujarTextoFondo(
  "Fotos y conversaciones...",
  "La música tranquila acompaña un ambiente relajado."
);

dibujarBoton("Continuar", 300, 300, 200, 40, 350, 325);
}

// PANTALLA 15
if (pantalla == 15) {
image(imagenes[14], 0, 0, 800, 450);

dibujarTextoFondo(
  "Una fiesta con mucha energía...",
  "Hay música fuerte, charlas y muchas cosas pasando."
);

dibujarBoton("Continuar", 300, 300, 200, 40, 350, 325);
}

// PANTALLA 16
if (pantalla == 16) {
image(imagenes[15], 0, 0, 800, 450);

dibujarTextoFondo(
  "¡También hay ganas de bailar!",
  "La música y el movimiento animan la celebración."
);

dibujarBoton("Continuar", 300, 300, 200, 40, 350, 325);
}

// PANTALLA 17
if (pantalla == 17) {
image(imagenes[16], 0, 0, 800, 450);

dibujarTextoFondo(
  "¡Todos a bailar!",
  "La música fuerte y el movimiento llenan la fiesta."
);

dibujarBoton("Continuar", 300, 300, 200, 40, 350, 325);
}

// PANTALLA 18
if (pantalla == 18) {
dibujarTextoFondo(
  "¿Cómo resultó la fiesta?",
  "Todas tus decisiones ayudaron a construir este cumpleaños."
);

dibujarBoton("Ver resultado", 300, 285, 200, 40, 340, 310);
dibujarBoton("Volver al inicio", 300, 345, 200, 40, 330, 370);
}

// FINAL 3 final tranquilo
if (pantalla == 19) { 
image(imagenes[19], 0, 0, 800, 450);

dibujarTextoFondo(
  "Un cumpleaños distinto",
  "La fiesta tiene un ambiente íntimo.",
  "Los más cercanos se quedan a compartir la torta.",
  "El cumpleaños termina siendo un momento especial."
);

dibujarBoton("Ver créditos", 180, 350, 200, 40, 220, 377);
dibujarBoton("Volver al inicio", 430, 350, 200, 40, 450, 377);
}

// FINAL 1 cumpleaños perfecto
if (pantalla == 20) {
image(imagenes[18], 0, 0, 800, 450);

dibujarTextoFondo(
  "El cumpleaños perfecto",
  "Todos disfrutan de la celebración.",
  "Llegan a la mesa, encienden las velas y cantan.",
  "La torta está intacta y el día termina bien."
);

dibujarBoton("Ver créditos", 180, 350, 200, 40, 220, 377);
dibujarBoton("Volver al inicio", 430, 350, 200, 40, 450, 377);
}

// FINAL 2 final caotico
if (pantalla == 21) {
image(imagenes[17], 0, 0, 800, 450);

dibujarTextoFondo(
  "¡Se descontroló todo!",
  "La fiesta se vuelve un lio",
  "La mesa se mueve y la torta termina en el piso",
  "Aunque todo termina siendo una anécdota inesperada"
);

dibujarBoton("Ver creditos", 180, 350, 200, 40, 220, 377);
dibujarBoton("Volver al inicio", 430, 350, 200, 40, 450, 377);
}

 if (pantalla == 22) {
background("#FFD3FC");

if (frameCount % 8 == 0) {
frameactual++;

if (frameactual > 4) {
  frameactual = 0;       
}
}

image(frame[frameactual], 80, 250, 100, 100);

fill("#8D2C93");
textFont("MicrosoftYaHeiUI-48");
textSize(30);    
text("CREDITOS", 325, 109);
 textFont("Arial");
fill(0);
textSize(27);
text("Un cumpleaños, distintas formas de vivirlo", 220, 160);
 textSize(20);
text("Delfina Alonso y Brenda Baños", 270, 210);
text("COMISION 3", 345, 250);

// bton volver al inicio
fill(255);
noStroke();
rect(280, 390, 240, 45);
textFont("MicrosoftYaHeiUI-48");
fill("#8D2C93");
textSize(20);
text("Volver al inicio", 325, 418);
}
}


function mousePressed() {
// inicio
if (pantalla == 0 &&
  mouseX >= 220 && mouseX <= 540 &&
  mouseY >= 265 && mouseY <= 305) { 
pantalla = 1;
return;
}

// seguir durmiendo
if (pantalla == 1 &&
  mouseX >= 100 && mouseX <= 290 &&
  mouseY >= 265 && mouseY <= 305) {
pantalla = 2;
return;
}

// levantarse temprano
if (pantalla == 1 &&
  mouseX >= 510 && mouseX <= 710 &&
  mouseY >= 265 && mouseY <= 305) {
pantalla = 3;
return;
}

// desayuno tranquilo en pantalla 2
if (pantalla == 2 &&
  mouseX >= 100 && mouseX <= 290 &&
  mouseY >= 300 && mouseY <= 340) {
pantalla = 4;
return;
}

// desayuno rápido en pantalla 2
if (pantalla == 2 &&
  mouseX >= 510 && mouseX <= 700 &&
  mouseY >= 300 && mouseY <= 340) {
pantalla = 5;
return;
}

// desayuno tranquilo en pantalla 3
if (pantalla == 3 &&
  mouseX >= 100 && mouseX <= 290 &&
  mouseY >= 300 && mouseY <= 340) {
pantalla = 4;
return;
}

// desayuno rápido en pantalla 3
if (pantalla == 3 &&
  mouseX >= 510 && mouseX <= 700 &&
  mouseY >= 300 && mouseY <= 340) {
pantalla = 5;
return;
}

// decoración simple
if ((pantalla == 4 || pantalla == 5) &&
  mouseX >= 100 && mouseX <= 320 &&
  mouseY >= 300 && mouseY <= 340) {
decoracion = "simple";
pantalla = 6;
return;
}

// muchas decoraciones
if ((pantalla == 4 || pantalla == 5) &&
  mouseX >= 480 && mouseX <= 700 &&
  mouseY >= 300 && mouseY <= 340) {
decoracion = "muchas";
pantalla = 7;
return;
}

// decoración simple y pocos invitados
if (pantalla == 6 &&
  mouseX >= 100 && mouseX <= 290 &&
  mouseY >= 300 && mouseY <= 340) {
invitados = "pocos";
pantalla = 8;
return;
}

// decoración simple y muchos invitados
if (pantalla == 6 &&
  mouseX >= 510 && mouseX <= 700 &&
  mouseY >= 300 && mouseY <= 340) {
invitados = "muchos";
pantalla = 9;
return;
}

// muchas decoraciones y pocos invitados
if (pantalla == 7 &&
  mouseX >= 100 && mouseX <= 290 &&
  mouseY >= 300 && mouseY <= 340) {
invitados = "pocos";
pantalla = 10; 
return;
}
// muchas decoraciones y muchos invitados
if (pantalla == 7 &&
  mouseX >= 510 && mouseX <= 700 &&
  mouseY >= 300 && mouseY <= 340) {
invitados = "muchos";
pantalla = 11;
return;
}

// continuar desde las pantallas de combinaciones
if ((pantalla == 8 || pantalla == 9 ||
   pantalla == 10 || pantalla == 11) &&
  mouseX >= 300 && mouseX <= 500 &&
  mouseY >= 300 && mouseY <= 340) {
pantalla = 12;
return;
}

// música tranquila
if (pantalla == 12 &&
  mouseX >= 80 && mouseX <= 360 &&
  mouseY >= 300 && mouseY <= 345) {
musica = "tranquila";
reproducirMusica("tranquila");
pantalla = 13;
return;
}

// música fuerte
if (pantalla == 12 &&
  mouseX >= 440 && mouseX <= 720 &&
  mouseY >= 300 && mouseY <= 345) {
musica = "fuerte";
reproducirMusica("fuerte");
pantalla = 13;
return;
}

// fotos y conversar
if (pantalla == 13 &&
  mouseX >= 80 && mouseX <= 360 &&
  mouseY >= 300 && mouseY <= 345) {
actividad = "fotos";

if (musica == "tranquila") {
  pantalla = 14;
} else {
  pantalla = 15;
}
return; 
}

// bailar
if (pantalla == 13 &&
  mouseX >= 440 && mouseX <= 720 &&
  mouseY >= 300 && mouseY <= 345) {
actividad = "bailar";

if (musica == "tranquila") {
  pantalla = 16;
} else {
  pantalla = 17;
}
return;
}

// continuar desde las pantallas de actividad
if ((pantalla == 14 || pantalla == 15 ||
   pantalla == 16 || pantalla == 17) &&
  mouseX >= 300 && mouseX <= 500 &&
  mouseY >= 300 && mouseY <= 340) {
detenerMusica();
pantalla = 18;
return;
}

// ver resultado de la fiesta
if (pantalla == 18 &&
  mouseX >= 300 && mouseX <= 500 &&
  mouseY >= 285 && mouseY <= 325) {
detenerMusica();

if (decoracion == "simple" &&
    invitados == "pocos" &&
    musica == "tranquila" &&
    actividad == "fotos") {
  pantalla = 19;
} else if (decoracion == "muchas" &&
           invitados == "muchos" &&
           musica == "fuerte" &&
           actividad == "bailar") {
  pantalla = 21;
} else {
  pantalla = 20;
}
return;
}

// volver al inicio desde pantalla 18
if (pantalla == 18 &&
  mouseX >= 300 && mouseX <= 500 &&
  mouseY >= 345 && mouseY <= 385) {
detenerMusica();
pantalla = 0;
return;
}

// ver creditos desde los finales
if ((pantalla == 19 || pantalla == 20 || pantalla == 21) &&
  mouseX >= 180 && mouseX <= 380 &&
  mouseY >= 350 && mouseY <= 390) {
detenerMusica();
pantalla = 22;
return;
}

// volver al inicio desde los finales
if ((pantalla == 19 || pantalla == 20 || pantalla == 21) &&
  mouseX >= 430 && mouseX <= 630 &&
  mouseY >= 350 && mouseY <= 390) {
detenerMusica();
pantalla = 0;
return;
}

 //botn volver al inicio
if (pantalla == 22) {
if (mouseX > 280 && mouseX < 520 &&
    mouseY > 390 && mouseY < 435) {
  pantalla= 0;
}
}
}

// funcion para dibujar botones
function dibujarBoton(textoBoton, x, y, ancho, alto, textoX, textoY) {
fill(255);
rect(x, y, ancho, alto);

fill(0);
textSize(20);
textFont("Arial");
text(textoBoton, textoX, textoY);
}

// función para dibujar el rectangulo con los textos en cada pantalla
function dibujarTextoFondo(texto1, texto2 = "", texto3 = "", texto4 = "") {
let alto = 48;

if (texto2 != "") {
alto = 70;
}

if (texto3 != "") {
alto = 92;
}

if (texto4 != "") {
alto = 114;
}

noStroke();
fill(255, 255, 255, 210);
rect(25, 12, 750, alto) ;

fill(25);
textFont("Arial");
textSize(18);
textAlign(CENTER, CENTER);

text(texto1, 400, 30);

if (texto2 != "") {
text(texto2, 400, 52);
}

if (texto3 != "") {
text(texto3, 400, 74);
}

if (texto4 != "") {
text(texto4, 400, 96);
}

textAlign(LEFT, BASELINE);
}

function reproducirMusica(tipo) {  
userStartAudio();

if (musicatranquila && musicatranquila.isPlaying()) {
musicatranquila.stop();  
}

if (musicafuerte && musicafuerte.isPlaying()) {
musicafuerte.stop();
}

if (tipo == "tranquila") {
musicatranquila.loop();
} else {
musicafuerte.loop();
}
}

function detenerMusica() {
if (musicatranquila && musicatranquila.isPlaying()) {
musicatranquila.stop();
} 

if (musicafuerte && musicafuerte.isPlaying()) {
musicafuerte.stop();
}
}
