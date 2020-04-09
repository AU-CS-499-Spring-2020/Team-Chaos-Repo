
function runScript()
{
  currentY =0;
  currentX =0;
  curState =0;
  scale=0.5;
  seed="test"
  position =0;

  generator = new StringGenerator();
  generator.setInput(seed.toLowerCase());
  seed = generator.input;
  PL = new pointList();
  PL.addPoint(curState, currentX, currentY);

  do{
    if(seed.charAt(position).match("a") ||
        seed.charAt(position).match("b") ||
        seed.charAt(position).match("c") ||
        seed.charAt(position).match("d") ||
        seed.charAt(position).match("e") ||
        seed.charAt(position).match("f") ||
        seed.charAt(position).match("0") ||
        seed.charAt(position).match("8") ||
        seed.charAt(position).match("6"))
  {
    curState=0;
    currentX= getNextX();
    currentY= getNextY();
  }
  else if(seed.charAt(position).match("g") ||
          seed.charAt(position).match("h") ||
          seed.charAt(position).match("i") ||
          seed.charAt(position).match("j") ||
          seed.charAt(position).match("k") ||
          seed.charAt(position).match("m") ||
          seed.charAt(position).match("7") ||
          seed.charAt(position).match("9") ||
          seed.charAt(position).match("1"))
  {
    curState=1;
    currentX= getNextX();
    currentY= getNextY();
  }
  else if(seed.charAt(position).match("n") ||
          seed.charAt(position).match("o") ||
          seed.charAt(position).match("p") ||
          seed.charAt(position).match("q") ||
          seed.charAt(position).match("r") ||
          seed.charAt(position).match("s") ||
          seed.charAt(position).match("1") ||
          seed.charAt(position).match("3") ||
          seed.charAt(position).match("5"))
  {
    curState=2;
    currentX= getNextX();
    currentY= getNextY();
  }
  else
  {
    curState=3;
    currentX= getNextX();
    currentY= getNextY();
  }

  PL.addPoint(curState, currentX, currentY);
  position++;

  }while (position <= seed.length)
}
//-----------------------FUNCTIONS------------------------//

function getNextX(){

    return scale*((currentX* Math.cos(curState.rotation))-
    (currentY*Math.sin(curState.Rotation)) +curState.deltaX);
}

function getNextY(){

    return scale*((currentX* Math.sin(curState.rotation))+
    (currentY*Math.cos(curState.Rotation)) +curState.deltaY);
}
