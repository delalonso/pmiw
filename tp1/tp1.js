// Delfina Alonso tp1
// Comisión 3 - Legajo: 125506/3

let imagenes= [];
let estado= 0;

let quieto= []; //0-3
let salto= []; //4-7
let correr = []; //8-10
let equilibrio = []; //11-12
let caida = []; //13-14

let frameactual= 0;
let posX = 1;
let posY = 420;
let velocidad = 18;
let fondolienzo;
  
function setup() {
createCanvas(800, 600);
fondolienzo= loadImage("data/fondolienzo.jpeg");
  
for (let i = 0; i <= 14; i++){
imagenes[i] = loadImage("data/frame" + i + ".png");
}
  for (let i = 0; i <= 3; i++) {
  quieto[i] = imagenes[i];
 }
  for (let i = 4; i <= 7; i++) {
  salto[i -4] = imagenes[i];
  }
  for (let i = 8; i <= 10; i++){
  correr[i - 8] = imagenes[i];
 }
  for (let i = 11; i <= 12; i++) {
  equilibrio[i- 11] = imagenes[i];
 }
  
  for (let i = 13; i <= 14; i++) {
  caida[i - 13] = imagenes[i];
  }
}
  
function draw() {
image(fondolienzo,0,0,800,600);

//cambiar de estado cuando termina la animacion
  if (frameactual > devolverframe(estado)) {
  
cambiarestados (1,3,2);
  
cambiarestados (2,2,3);
// if (estado == 2 && frameactual== 2) {
//estado = 3;
 //frameactual = 0;
  //}

cambiarestados (3,1,4);
  
cambiarestados(4,1,0);
  
  if (estado == 0) {
  frameactual = 0;
 }
}
  
// dibujar segun el estado
if (estado == 0) {
 mostraranimacion(quieto,frameactual, posX, 440, 130, 130);
  
} else if (estado == 1) {
mostraranimacion(salto,frameactual, posX, posY, 130, 130);
  posX = posX + 1;
  
 } else if (estado == 2) {
  mostraranimacion(correr, frameactual, posX, 440, 130, 130);
  posX = posX + 3;
  
  } else if (estado== 3) {
mostraranimacion(equilibrio, frameactual, posX, 440, 130, 130);
  posX = posX + 4;
  
  } else if (estado == 4) {
  mostraranimacion(caida, frameactual, posX, 440, 130, 130);
  posX = posX + 1;
  }
  
// avanzar frames
if (frameCount % velocidad == 0){
 frameactual++;
  }
  
if (posX>=800){
  posX=-130;
  }
 }
  
// funciones propias con parametros
function mostraranimacion(animacion,frame,x,y,ancho,alto){
image(animacion[frame],x,y,ancho,alto);
}

function cambiarestados (estadoactual,framelimite,estadonuevo){
if (estado== estadoactual && frameactual > framelimite) {
estado = estadonuevo;
frameactual = 0;
  }
 }

// funcion con return que devuelve un valor
function devolverframe(estadoactual){
if (estadoactual==0 || estadoactual==1) {
 return 3;
 }

 if (estadoactual==2){
 return 2;
}

 if (estadoactual== 3 || estadoactual==4) {
 return 1;
  }
}
 // con la tecla espacio empieza la animacion
 function keyPressed() {
 if (key == ' ') {
 estado = 1;
frameactual = 0;
    }
  }
