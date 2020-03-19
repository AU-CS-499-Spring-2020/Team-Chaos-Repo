class pointList
{
  private var firstPoint;
  private var lastPoint;

  public pointList()
  {
    firstPoint = lastPoint = null;
  }

  public addPoint(state, x, y)
  {
    var newPoint = new point(state, x, y);
    if(firstPoint == null)
    {
      firstPoint = lastPoint = newPoint;
    }
    else
    {
      lastPoint.nextPoint = newPoint;
      lastPoint = newPoint;
    }
  }

  private getFirstPoint()
  {
    return firstPoint
  }

  public getLastPoint()
  {
    return lastPoint;
  }

  public getAllPoints()
  {
    //have a loop here that returns all points one after another
    //or possibly have an input that parses which point you want
  }
}

class point
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
