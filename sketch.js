let capa1;
let capa2;
let miImagen;


function setup() {
  createCanvas(innerWidth, innerHeight);

  //creo los p5graphics
  capa1 = createGraphics(innerWidth, innerHeight);
  capa2 = createGraphics(innerWidth, innerHeight);
  miTextura = loadImage('../data/textura.jpg');
}

function draw() {
  //a partir de ahora la mezcla es "normal"
  blendMode(BLEND); //blendmode BLEND es el modo "normal" que conocemos

  background(0);

//dibujo una imagen como siempre hicimos

image(miTextura,0,0);

  //dibujo capa1 offscreen
  capa1.clear();//clear para que no me deje rastro
  //hago cosas, cada cosa tiene que hacerse "en" el graphics que quiero
  capa1.rectMode(CENTER);
  capa1.fill(255, 0, 0);
  capa1.rect(width / 2, height / 2, 400, 400);


  //dibujo capa2 offscreen
  capa2.clear(); //borro el fondo
  //hago cosas, cada cosa tiene que hacerse "en" el graphics que quiero
  capa2.rectMode(CENTER); 
  capa2.fill(0, 255, 0);
  
  capa2.rect(mouseX,mouseY, 400, 400);

  //dibujo una capa
  image(capa1, 0, 0);
  //a partir de ahora, todo lo que dibuje se dibuja en mezcla 
  
  //blendMode(DIFFERENCE);
  blendMode(MULTIPLY);
  
  
  image(capa2, 0, 0);
//podria dibujar una capa de nuevo con otro modo de mezcla
}
