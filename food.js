import{ onSnake, expandSnake} from './snake.js'
import { randomGridPos } from './grid.js'


let foodPos= getRandomFoodPos();
const snakeExpand_rate=1;

export function update() {
          const falge= onSnake(foodPos);
         // console.log(falge);
         if(falge){
            expandSnake(snakeExpand_rate);
            foodPos= getRandomFoodPos();
          }
}


export function draw(boardgame){
          const foodElement= document.createElement('div');
          foodElement.style.gridRowStart= foodPos.y;
          foodElement.style.gridColumnStart= foodPos.x;
          foodElement.classList.add('food');
          boardgame.appendChild(foodElement);
}

function getRandomFoodPos() {
          let newFoodPos;
          while(newFoodPos==null || onSnake(newFoodPos)){
                    newFoodPos= randomGridPos();
          } 
          return newFoodPos;
 }
