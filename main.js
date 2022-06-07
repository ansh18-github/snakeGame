import { update as updateSnake , draw as drawSnake, snake_speed } from './snake.js'
import { update as updateFood , draw as drawFood } from './food.js'



let lastTimerSnakeRender=0;
let gameOver=false;

const boardgame= document.getElementById('game-board')

function main(currentTime){

  if(gameOver){
    return alert('you lose');
  }



  //console.log(window.requestAnimationFrame(main));
  window.requestAnimationFrame(main);
  const timeToRender=(currentTime-lastTimerSnakeRender)/1000;

  if(timeToRender< snake_speed){
    return;
  }
    //console.log('hllo');
    lastTimerSnakeRender=currentTime;

   // update the screen
   update();

   //draw update screen
   draw();
  

}

window.requestAnimationFrame(main);

// update the screen
function update() {
  updateSnake();
  updateFood();
  //checkDeath();
}

//draw update screen
function draw() {
  boardgame.innerHTML= '';
 drawSnake(boardgame);
 drawFood(boardgame);
}
/*
function checkDeath() {
  gameOver= outsideGrid(getSnakeHead()) || snakeIntersection();
}

*/






//main logic start logics
//window.requestAnimationFrame(main);