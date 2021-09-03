class GuessingGame {
    constructor(min, max) {
    	this.min = min;
    	this.max = max;
    }

    setRange(min, max) {
    	// if (this.max )
    	// this.max = (max+min)/2;
    	this.max = max;
    	this.min = min;
    	console.log(this.max);
    	return (this.max, this.max);

    	// console.log((max-min)/2);
    	// guess((max-min)/2);


    }

    guess() {
    	
    	// this.max = Math.ceil((this.max+this.min)/2);
    	// console.log( "guess " + Math.ceil((this.max+this.min)/2));
    	return Math.ceil((this.max+this.min)/2);

    }

    lower() {

    	this.min = this.min;
    	this.max = Math.ceil((this.max+this.min)/2);
    	// console.log("lower max " + this.max);
    	// console.log("lower min " + this.min);
    	return  (this.min, this.max);
    	// return  (this.max/2, this.min);

    }

    greater() {
    	this.min = Math.ceil((this.max+this.min)/2);;
    	this.max = this.max;
    	// console.log("greater max " + this.max);
    	// console.log("greater min " + this.min);
    	return  (this.min, this.max);

    }
}

module.exports = GuessingGame;
