class pointList
{
  private var firstPoint;
  private var lastPoint;
  private var numPoints

  public pointList()
  {
    firstPoint = lastPoint = null;
    numPoints = 0;
  }

  public addPoint(state, x, y)
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

  private Point getFirstPoint()
  {
    return firstPoint
  }

  public Point getLastPoint()
  {
    return lastPoint;
  }

  public Point getPoint(n)
  {
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
}

class Point
{
  private var nextPoint;
  private var state;
  private var x;
  private var y;

  public point(state, x, y)
  {
    nextPoint = null;
    this.state = state;
    this.x = x;
    this.y = y;
  }

  public setState(newState)
  {
    state = newState;
  }

  public setX(newX)
  {
    x = newX;
  }

  public setY(newY)
  {
    y = newY;
  }

  public getState()
  {
    return state;
  }

  public getX()
  {
    return x;
  }

  public getY()
  {
    return y;
  }
}
