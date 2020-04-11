
function runScript(scaleIn, seedIn)//need to modify once canvas interface created specificaly seed generation
{
  currentY =0;
  currentX =0;
  curState =0;
  scale = scaleIn;
  seed = seedIn;

  //seed = userInput.toLowerCase()?
  position =0;

  states =
  [
    new State(0, 0, 0, 0.1),
    new State(1, 0, 2, 0.1),
    new State(2, 2, 0, 0.1),
    new State(3, 2, 2, 0.1),
  ];
//console.log (states[0].toString())
//console.log (states[1].toString())
//console.log (states[2].toString())
//console.log (states[3].toString())

  generator = new StringGenerator();
  generator.setSeed(seed.toLowerCase());
  seed = generator.getInput();
  //console.log(seed.length);
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

    return scale*((currentX* Math.cos(states[curState].getrotation()))-
    (currentY*Math.sin(states[curState].getrotation())) +states[curState].getdeltaX());
}

function getNextY(){

    return scale*((currentX* Math.sin(states[curState].getrotation()))+
    (currentY*Math.cos(states[curState].getrotation())) +states[curState].getdeltaY());
}

function useCanvas()
{
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  //variable used to get
  var again = true; //so true
  var currentPoint = PL.firstPoint;
  while(again)
  {
    //plot the point on canvas
    switch(currentPoint.state)
    {
      case 0:
        ctx.fillStyle = "#ff0000";
        break;
      case 1:
        ctx.fillStyle = "#00ff00";
        break;
      case 2:
        ctx.fillStyle = "#0000ff";
        break;
      default:
        ctx.fillStyle = "#ffff00";
    }
    ctx.fillRect(currentPoint.x + 250, currentPoint.y + 250, 1.5, 1.5);
    //grab the next point or end if no next point
    if(currentPoint.nextPoint != null)
    {
      currentPoint = currentPoint.nextPoint;
    }
    else
    {
      again = false;
    }
  }
}
