var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var rockets, rocket1, rocket2, rocket3, rocket4;
var c1,c2,c3,c4,track
function preload(){
c1=loadImage("rocket1.jpeg")
c2=loadImage("rocket2.jpeg")
c3=loadImage("rocket3.jpeg")
c4=loadImage("rocket4.jpeg")
track=loadImage("track.jpeg")
}



function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState===2){
    game.end();
  }
}