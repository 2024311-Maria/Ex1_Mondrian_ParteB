function setup() {
  createCanvas(800, 785);
  background(238, 242, 237);
  
}

function draw() {
  
  colorMode(RGB);
  //Cores R.G.B.
  background(238, 242, 237);
  
  // Create a p5.Color object using RGB values.
  let a = color(233, 45, 2); // red
  let b = color(31, 28, 109); // blue
  let c = color(253, 217, 0); // yellow
  
  //################################### QUADRADOS ############################################

  //Quadrado vermelho grande
  fill(a);
  noStroke();
  let rectVermelho = rect(0, 0, 800 / 2 - 30, 785 / 2 - 75); //x, y, largura, altura #### x -> / y -v ####
  
  //Quadrado azul
  fill(b);
  noStroke(); //x > ,  y v , lar > ,  alt v
  let rectAzul = rect(800 / 2 - 30, 785 / 2 + 117, 615 - (800 / 2 - 30), 750 - (785 / 2 + 117));

  //Retangulo amarelo
  fill(c);
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
  //let rectHue = map(mouseX, mouseY, width, 0, 25);

  // Scale the mouseY value from 0 to 400 to a range between 20 and 300
  //let diameter = map(0, 0, 800 / 2 - 30, 785 / 2 - 75, 300);

  //fill(rectHue, 80, 90);
  //rect(0, 0, diameter, diameter);


  //colorMode(RGB);
  //x vai ser as colunas, ate ao fim do rectVermelho
  //for (let x = 0; x < 800 / 2 - 30; x +=20); {
    //for (let y = 0; y < 785 / 2 - 75; y +=20+); { //y vai ser as linhas
      
      //point(x, y); //desenha o ponto na posição (x, y)
    //}

  //}
}