var canvas;
var db,contestantCount,quiz,question,contestant;
var gameState=0;
var allContestants;
function setup(){
  canvas = createCanvas(1000,500);
  db = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");

  if(contestantCount===4){
    quiz.update(1);

  }
  if(gameState===1){
    clear();
    quiz.play();
  }
}
