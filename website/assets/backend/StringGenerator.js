
class StringGenerator {

  seed;
  input;

    constructor(){
        this.seed="";
        this.input="";
    }

    //
    setSeed(seed){
        this.seed= seed;
        this.setInput(seed);
    }

    setInput(seed){
        this.input= seed
        while (this.input.length < 1000000 && this.seed.length > 0){
            this.input=this.input + seed;
        }
    }
}
