var canvas;
var backgroundImage;
var database;
var form, player;
var playerCount;



function preload() {
 
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(backgroundImage);
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
