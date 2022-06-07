import { getInputDirection } from "./input.js";

export const snake_speed=0.3;
const snakeBody= [{x:11, y:11}
//{x:12, y:11},
  //        {x:13, y:11},
    //      {x:14, y:11}
];

let addSegement=0;

export function update() {
console.log("snake update");
addSnakeBody();
const inputDir=getInputDirection();

 for(let i=snakeBody.length -2; i>=0; i--){
          snakeBody[i+1]= { ...snakeBody[i]};
    }

    snakeBody[0].x +=inputDir.x;
    snakeBody[0].y +=inputDir.y;


}

export function draw(boardgame) {
          //console.log("snake draw");
          snakeBody.forEach( updatePos => {
                    const snakeNewPos= document.createElement('div');
                    snakeNewPos.style.gridRowStart= updatePos.y;
                    snakeNewPos.style.gridColumnStart= updatePos.x;
                    snakeNewPos.classList.add('snake');
                    boardgame.appendChild(snakeNewPos);
          })
}


export function expandSnake(amount){
          addSegement +=amount;
}

export function onSnake(position){
         return snakeBody.some( segment => {
                    const qp= equalPositions( segment, position);
                  //console.log(qp);
                    return qp;
          });
}

export function getSnakeHead() {
          return snakeBody[0];
}
/*
export function snakeIntersection(){
          
}
*/
function equalPositions(pos1, pos2){
          return pos1.x === pos2.x && pos1.y === pos2.y;
}

function addSnakeBody() {
          for(let i=0 ; i<addSegement; i++){
                    snakeBody[snakeBody.length]= { ...snakeBody[snakeBody.length -1]};
          }
          addSegement=0;
}