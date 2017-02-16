/*
/!**
 * Created by dennisschmock on 16/02/2017.
 *!/
function Numbers(numbs) {

    this.nums = numbs;
    this.fives = [];
    this.nums.forEach(function (v) {
        if (v % 5 === 0) {
            this.fives.push(v); //since it is a new function, it gets it own this, hence, this is undefined
        }
    });
}
var numbers = new Numbers([1,3,5,10,14,20,33,50]);
console.log(numbers.fives);
*/

//Solution using ES5, "binding" this to self.
function Numbers(numbs) {
    let self = this;
    self.nums = numbs;
    self.fives = [];
    self.nums.forEach(function (v) {
        if (v % 5 === 0) {
            self.fives.push(v);
        }
    });
}
var numbers = new Numbers([1,3,5,10,14,20,33,50]);
console.log(numbers.fives);

//Solution using arrow function (ES6)
function Numbers(numbs) {
    this.nums = numbs;
    this.fives = [];
    this.nums.forEach( (v)=> {
        if (v % 5 === 0) {
            this.fives.push(v); //Since an arrow function doesn't bind this, the this. refers to the super this.
        }
    });
}
var numbers = new Numbers([1,3,5,10,14,20,33,50]);
console.log(numbers.fives);


//When not to use Arrow functions. Using arrow function in this example makes it worse. Since this.count refers to a global
//count
var counter = {
    count: 0,
    inc:  ()=> {
        this.count++;
    }
}
var func = counter.inc; //Store "reference" to inc
func();
console.log(counter.count); //Still zero
counter.inc();
console.log(counter.count); //Now still zero, after making an arrow function.