let img1;
let img2;
var game1;
var game2;
var game3;
var home;
let col;

function preload() {
  img1 = loadImage('./plants.jpeg');
  img2 = loadImage('./blueplant.jpg');

}
function setup() {
  createCanvas(600, 400);
  drawWelcome();
}

function draw() {


}

/// Hello Aryan made a achange

function drawWelcome() {
  removeElements();
  background(220);
  tint(255, 255);
  image(img2, 0, 0, 600, 400);
  textFont('Times New Roman', 100);

  text("Cogni", 150, 150);
  text("Games", 140, 250);
  let col = color(204, 229, 255);

  game1 = createButton('Match Shapes');
  game1.style('font-family', 'Courier New');
  game1.position(70, 300);
  game1.mousePressed(drawGame1);
  game1.style('background-color', col);

  game2 = createButton('Follow Patterns');
  game2.style('font-family', 'Courier New');

  game2.position(205, 300);
  game2.mousePressed(drawGame2);
  game2.style('background-color', col);

  game3 = createButton('Follow Characters');
  game3.style('font-family', 'Courier New');
  game3.position(360, 300);
  game3.mousePressed(drawGame3);
  game3.style('background-color', col);
}

function drawGame1() {
  removeElements();
  background(220);
  image(img2, 0, 0, 600, 400);
  home = createButton("Go back to home");
  home.style('font-family', 'Courier New');
  home.position(400, 350);
  home.mousePressed(drawWelcome);
  home.style('background-color', col);
}

function drawGame2() {
  removeElements();
  background(220);
  image(img2, 0, 0, 600, 400);
  home = createButton("Go back to home");
  home.style('font-family', 'Courier New');
  home.position(400, 350);
  home.mousePressed(drawWelcome);

}
function drawGame3() {
  removeElements();
  background(220);
  image(img2, 0, 0, 600, 400);
  home = createButton("Go back to home");
  home.style('font-family', 'Courier New');
  home.position(400, 350);
  home.mousePressed(drawWelcome);

}

