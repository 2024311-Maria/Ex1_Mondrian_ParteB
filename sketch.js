var r;
var g;
var b;
var a;

function setup() {
  createCanvas(800, 785);
  background(238, 242, 237);
  frameRate(5);

}

function draw() {
  
  colorMode(RGB);
  //Cores R.G.B.
  background(238, 242, 237);
  
  // Create a p5.Color object using RGB values.
  let red = color(233, 45, 2); // red
  let blue = color(31, 28, 109); // blue
  let yellow = color(253, 217, 0); // yellow
  
  //################################### QUADRADOS ############################################

  //Quadrado vermelho grande
  fill(red);
  noStroke();
  let rectVermelho = rect(0, 0, 800 / 2 - 30, 785 / 2 - 75); //x, y, largura, altura #### x -> / y -v ####
  
  //Quadrado azul
  fill(blue);
  noStroke(); //x > ,  y v , lar > ,  alt v
  let rectAzul = rect(800 / 2 - 30, 785 / 2 + 117, 615 - (800 / 2 - 30), 750 - (785 / 2 + 117));

  //Retangulo amarelo
  fill(yellow);
  noStroke();
  let rectAmarelo = rect(0, 785 / 2 + 117, 80,785);

  //################################### LINHAS ############################################

  //Linha vertical a meio
  stroke(0);
  strokeWeight(10);
  line(800 / 2 - 30, 0, 800 / 2 - 30, 785); //x1, y1, x2, y2 #### x -> / y -v ####

  //1ª Linha horizontal a meio
  stroke(0);
  strokeWeight(15);
  line(0, 785 / 2 - 75, 800, 785 / 2 - 75);

  //2ª Linha horizontal a meio
  stroke(0);
  strokeWeight(15);
  line(0, 785 / 2 + 117, 800, 785 / 2 + 117);

  //1ª Pequena linhas vertical
  stroke(0);
  strokeWeight(10);
  line(80, 785 / 2 + 117, 80, 785);

  //2ª Pequena linhas vertical
  stroke(0);
  strokeWeight(10);
  line(615, 785 / 2 + 117, 615, 785);

  //Pequena linhas horizontal
  stroke(0);
  strokeWeight(11);
  line(800 / 2 - 30, 750, 615, 750);


  //################################### RANDOM ############################################

  //colorMode(HSB);
  //noStroke();
  
  // Scale the mouseX value from 0 to 720 to a range between 0 and 360
  //let gradient = map(mouseX, mouseY, width, 0, 25);

  // Scale the mouseY value from 0 to 400 to a range between 20 and 300
  //let diameter = map(0, 0, 800 / 2 - 30, 785 / 2 - 75, 300);

  //fill(rectHue, 80, 90);
  //rect(0, 0, diameter, diameter);
  
  //stroke(gradient, gradient, gradient);
  //strokeWeight(1);

  //colorMode(RGB);
  //x vai ser as colunas, ate ao fim do rectVermelho
/*   for (let x = 0; x < (800 / 2 - 30); x += 5) { //o segundo valor não está a ser usado, mas é o limite do x, que é o fim do rectVermelho
    for (let y = 0; y < (785 / 2 - 75); y +=5) { //y vai ser as linhas
      point(x, y); //desenha o ponto na posição (x, y)
    }
  } */


  //variantes das cores dos quadrados coloridos
  /* // Create a p5.Color object using RGB values.
  let red = color(233, 45, 2); // red
  let blue = color(31, 28, 109); // blue
  let yellow = color(253, 217, 0); // yellow */


  /* r = random(150,233);
  g = random(50,200);
  b = random(0,20);
  a = random(200,255); */

  
  //dois pontos random no quadrado vermelho

  
  /* stroke(r,g,b,a);
  strokeWeight(8);

  let x = random(0, 800 / 2 - 30);
  let y = random(0, 785 / 2 - 75);
  line(x, y, x, y);
  
  let xx = random(0, 800 / 2 - 30);
  let yy = random(0, 785 / 2 - 75);
  line(xx, yy); */
  
  
}



