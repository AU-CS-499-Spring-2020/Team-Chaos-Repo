class pointList
{
  firstPoint;
  lastPoint;
  numPoints;

  constructor()
  {
    this.firstPoint = this.lastPoint = null;
    this.numPoints = 0;
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
    if(this.numPoints == 0)
    {
      this.firstPoint = this.lastPoint = this.newPoint;
      this.numPoints++;
    }
    else
    {
      console.log("Jacob wasn't here")
      this.lastPoint.nextPoint = newPoint;
      this.lastPoint = newPoint;
      this.numPoints++;
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
    this.nextPoint = null;
    this.state = state;
    this.x = x;
    this.y = y;
  }

  get nextPoint(){return }
  get state(){return }
  get x(){return }
  get y(){return }
  set nextPoint(newNextPoint)
  {
    //wrong attempts: 6
    this.nextPoint = newNextPoint
  }
  set state(newState){this.state = newState}
  setx(newX){this.x = newX}
  sety(newY){this.y = newY}


}
