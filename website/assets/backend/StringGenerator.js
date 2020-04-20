
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
        if(seed.length>0)
        {
            this.input= seed.charAt(Math.floor(Math.random()*seed.length));
        }

        while (this.input.length < 1000000 && this.seed.length > 0)
        {
            this.input=this.input + seed.charAt(Math.floor(Math.random()*seed.length));
        }
    }

    getInput(){
        return this.input;
    }
}
