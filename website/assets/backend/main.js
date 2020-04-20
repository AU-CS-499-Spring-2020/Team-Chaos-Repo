
function runScript(seedIn, scaleIn, rot1, rot2, rot3, rot4, toggle)
{
  currentY =0;
  currentX =0;
  curState =0;
  scale = scaleIn;
  seed = seedIn;
  rotation1 = parseFloat(rot1);
  rotation2 = parseFloat(rot2);
  rotation3 = parseFloat(rot3);
  rotation4 = parseFloat(rot4);

  //seed = userInput.toLowerCase()?
  position =0;

  if(toggle)
  {
    threeState();
  }
  else
    fourState();


}
//-----------------------FUNCTIONS------------------------//

function threeState()
{
  states =
  [
    new State(0, 0, 0, rotation1, scale),
    new State(1, 100, 200, rotation2, scale),
    new State(2, 200, 0, rotation3, scale)
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
        seed.charAt(position).match("6") ||
        seed.charAt(position).match("g") ||
        seed.charAt(position).match("j") ||
        seed.charAt(position).match("7"))
  {
    curState=0;
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
          seed.charAt(position).match("5") ||
          seed.charAt(position).match("h") ||
          seed.charAt(position).match("k") ||
          seed.charAt(position).match("9"))
  {
    curState=1;
    currentX= getNextX();
    currentY= getNextY();
  }
  else
  {
    curState=2;
    currentX= getNextX();
    currentY= getNextY();
  }

  PL.addPoint(curState, currentX, currentY);
  position++;

  }while (position <= seed.length)
}

function fourState()
{
  states =
  [
    new State(0, 0, 0, rotation1, scale),
    new State(1, 0, 200, rotation2, scale),
    new State(2, 200, 0, rotation3, scale),
    new State(3, 200, 200, rotation4, scale)
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

function getNextX(){

    return states[curState].scale*((currentX* Math.cos(states[curState].getrotation()))-
    (currentY*Math.sin(states[curState].getrotation())) +states[curState].getdeltaX());
}

function getNextY(){

    return states[curState].scale*((currentX* Math.sin(states[curState].getrotation()))+
    (currentY*Math.cos(states[curState].getrotation())) +states[curState].getdeltaY());
}

function getExtremePoints()
{
  var currentPoint = PL.firstPoint
  var again = true; //so true
  var minX, minY, maxX, maxY;
  minX = minY = maxX = maxY = 0;

  while(again)
  {
    //get minimum x
    if(currentPoint.x < minX)
    {
      minX = currentPoint.x;
    }
    //get minimum Y
    if(currentPoint.y < minY)
    {
      minY = currentPoint.Y;
    }
    //get maximum X
    if(currentPoint.x > maxX)
    {
      maxX = currentPoint.x;
    }
    //get maximum Y
    if(currentPoint.y > maxY)
    {
      maxY = currentPoint.y;
    }
    //see if we are done (so done)
    if(currentPoint.nextPoint != null)
    {
      currentPoint = currentPoint.nextPoint;
    }
    else
    {
      again = false;
    }
  }
  var medX, medY;
  medX = (minX + maxX) / 2;
  medY = (minY + maxY) / 2;
  useCanvas(medX, medY);
}

function useCanvas(medX, medY)
{
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = "#000000";
  ctx.fillRect(0, 0, 1000, 1000);
  //variable used to get
  var again = true; //so true
  var currentPoint = PL.firstPoint;
  while(again)
  {
    //plot the point on canvas
    switch(currentPoint.state)
    {
      case 0://red
        ctx.fillStyle = "#ff0000";
        break;
      case 1://blue
        ctx.fillStyle = "#00ff00";
        break;
      case 2://green
        ctx.fillStyle = "#0000ff";
        break;
      default://yellow
        ctx.fillStyle = "#ffff00";
    }
    ctx.fillRect(currentPoint.x + (500)- medX, -currentPoint.y + (500)+ medY, 1, 1);
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
