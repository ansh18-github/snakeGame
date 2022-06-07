// all direction input will be here


let inputDirection= { x:0, y:0} ;
let lastInputDir= {x:0, y:0};

window.addEventListener('keydown', (e) => {
          switch(e.key) {
              case 'ArrowUp' :
                    if(lastInputDir.y!==0) break;
                     inputDirection= { x:0, y:-1};
                     break;   
              case 'ArrowDown' :
                    if(lastInputDir.y!==0) break;    
                    inputDirection= { x:0, y:1};
                    break;  
              case 'ArrowLeft' :
                    if(lastInputDir.x!==0) break;   
                     inputDirection= { x:-1, y:0};
                     break;  
              case 'ArrowRight' :
                    if(lastInputDir.x!==0) break; 
                     inputDirection= { x:1, y:0};
                     break;           
          }
})

export function getInputDirection() {
          lastInputDir=inputDirection;
          return inputDirection;
}


