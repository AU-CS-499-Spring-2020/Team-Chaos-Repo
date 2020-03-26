//States Class
//https://www.w3schools.com/js/js_classes.asp

class States {

  name;
  deltaX;
  deltaY;
  rotation;


    //Default Constructor
    constructor(stateName, deltaX, deltaY, rotation) {
      this.name = stateName;
      this.deltaX = deltaX;
      this.deltaY = deltaY;
      this.rotation = rotation;
    }

    //Retrieve Name
    get name(){
        return this.name;
    }

    //Retrieve Equation
    get deltaX(){
        return this.deltaX;
    }

    get deltaY(){
      return this.deltaY;
  }

  get rotation(){
    return this.rotation;
}

  }
