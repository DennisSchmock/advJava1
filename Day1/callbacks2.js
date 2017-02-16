/**
 * Created by dennisschmock on 02/02/2017.
 */
var names = ["kurt","ole","ib"];

//This is my NEW version of forEach
//It does not really make sense here, what does this refer to?
function myforEach(callback){
    for(var i =0; i < this.length; i++){
        callback(this[i]);
    }
}

//Now it makes sense, when attached to the Array.prototype
Array.prototype.myforEach = myforEach;
myforEach((name)=>console.log(name));

//Observe how it's used exactly as the the original forEach
// names.myforEach(function(name){
//     console.log(name);
// })

function hoistingDemo1() {
    console.log("Value of myCoolObject: " + myCoolObject);

    if (!myCoolObject) {
        var myCoolObject = {value: "Wau, I'm cool"};
        console.log(myCoolObject.value);
    }
}

hoistingDemo1();

var myCar = {};
myCar.make = "Ford";
myCar.make1 = "Ford";
myCar.make2 = "Ford";
for(prop in myCar){
    console.log(prop);
}

