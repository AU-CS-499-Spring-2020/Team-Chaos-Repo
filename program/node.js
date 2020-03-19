class node
{
  private var state;
  private var x;
  private var y;

  public node(state, x, y)
  {
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
