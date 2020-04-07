
function runScript()
{
  currentY =0;
  currentX =0;
  curState =0;
  nextState =0;
  scale=0.5;
  seed="test"
  position =0;

  generator = new StringGenerator();
  generator.setInput(seed.toLowerCase());
  seed = generator.input;
  PL = new pointList();
  PL.addPoint(nextState, currentX, currentY);

  do{
      switch (seed.charAt(position)){

              //state 0
          case "a" || "b" || "c" || "d" || "e" || "f" || "0" || "8" || "6" :
              nextState=0;
              currentX= getNextX(currentX, currentY,nextState);
              currentY= getNextY(currentX,currentY,nextState);

              break;
              //state 1
          case "g" || "h" || "i" || "j" || "k" || "l" || "m" || "7" || "9" :
              nextState=1;
              currentX= getNextX(currentX, currentY,nextState);
              currentY= getNextY(currentX,currentY,nextState);

              break;
              //state 2
          case "n" || "o" || "p" || "q" || "r" || "s" || "1" || "3" || "5" :
              nextState=2;
              currentX= getNextX(currentX, currentY,nextState);
              currentY= getNextY(currentX,currentY,nextState);

              break;
              //state 3 (also the default state)
          default :
              nextState=3;
              currentX= getNextX(currentX, currentY,nextState);
              currentY= getNextY(currentX,currentY,nextState);
      }
console.log("fuck this shit too")
      PL.addPoint(nextState, currentX, currentY);

      position++;
      currentState=nextState;

  }while (position < seed.length)
}
//-----------------------FUNCTIONS------------------------//

function getNextX(currentX, currentY, state){

    return scale*((currentX* Math.cos(curState.rotation))-
    (currentY*Math.sin(curState.Rotation)) +curState.deltaX);
}

function getNextY(currentX, currentY, state){

    return scale*((currentX* Math.sin(curState.rotation))+
    (currentY*Math.cos(curState.Rotation)) +curState.deltaY);
}
