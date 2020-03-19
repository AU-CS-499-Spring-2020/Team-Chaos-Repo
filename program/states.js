//States Class
//https://www.w3schools.com/js/js_classes.asp

class States {

  private var name;
  private var equation;

    //Default Constructor
    constructor(stateName, equation) {
      this.name = stateName;
      this.equation = equation;
    }

    //Retrieve Name
    get name(){
        return this.name;
    }

    //Retrieve Equation
    get equation(){
        return this.equation;
    }

  }
