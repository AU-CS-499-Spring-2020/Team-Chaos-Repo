
class StringGenerator {

    
    //constructor
    constructor(seed){
        this.seed = seed;
        this.input= getInput(seed);
    }

    constructor(){
        this.seed="";
        this.input="";
    }

    setSeed(seed){
        this.seed= seed;
        this.setInput(seed);
    }

    getSeed(){
        return this.seed;
    }

    setInput(seed){
        this.input= seed
        while (this.input.length()  < 1000000){
            this.input=this.input + seed;
        }
    }
}