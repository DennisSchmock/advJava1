/**
 * Created by dennisschmock on 16/02/2017.
 */
let fName = "Kurt", lName = "Wonnegut";

[fName, lName] = [lName, fName]; //Swapping using array swap.

//Testing
console.log(`First: ${fName}, Last: ${lName}`);

//Part B
function getPerson(){
    return {
        firstName: "Kurt",
        lastName: "Wonnegut",
        gender : "Male",
        email: "kurt@wonnegut.dk",
        phone: "12345",
    }
}


var {firstName,lastName} = getPerson();
console.log(firstName,lastName);