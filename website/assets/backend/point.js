class pointList
{
  firstPoint;
  lastPoint;
  numPoints;

  constructor()
  {
    firstPoint = lastPoint = null;
    numPoints = 0;
  }

  get firstPoint(){return this.firstPoint;}
  get lastPoint(){return this.lastPoint;}
  get numPoints(){return this.numPoints;}
  set firstPoint(newFirst){this.firstPoint = newFirst;}
  set lastPoint(newLast){this.lastPoint = newLast;}
  set numPoints(newNum){this.numPoints = newNum;}

  createPointList()
  {
    pointList = new pointList();
  }

  getFirstPoint()
  {
    return firstPoint;
  }

  getLastPoint()
  {
    return lastPoint;
  }

  getPoint(n)
  {
    currentPoint = this.firstPoint
    //ensure that point n exists
    if(numPoints != 0 && n <= numPoints && n > 0)
    {
      currentPoint = firstPoint;
      for(var i = 1; i < n; i++)
      {
        currentPoint = currentPoint.nextPoint;
      }
      return currentPoint;
    }
  }
  addPoint(state, x, y)
  {
    var newPoint = new Point(state, x, y);
    if(numPoints == 0)
    {
      firstPoint = lastPoint = newPoint;
      numPoints++;
    }
    else
    {
      lastPoint.nextPoint = newPoint;
      lastPoint = newPoint;
      numPoints++;
    }
  }
}

class Point
{
  nextPoint;
  state;
  x;
  y;

  constructor(state, x, y)
  {
    nextPoint = null;
    this.state = state;
    this.x = x;
    this.y = y;
  }

  get nextPoint(){return }
  get state(){return }
  get x(){return }
  get y(){return }
  set nextPoint(newNextPoint){this.nextPoint = newNextPoint}
  set state(newState){this.state = newState}
  set x(newX){this.x = newX}
  set y(newY){this.y = newY}

  
}