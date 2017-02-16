/**
 * Created by dennisschmock on 16/02/2017.
 */
const PI = 3.141593
console.log(PI > 3.0) //Outputs true

let a = [1,2,3,4,5,6];
let b = [1,23,4,5,6];

for (let i = 0; i < a.length; i++) {
    let x = a[i]

}
for (let i = 0; i < b.length; i++) {
    let y = b[i]

}

let callbacks = []
for (let i = 0; i <= 2; i++) {
    callbacks[i] = function () { return i * 2 }
}
console.log(callbacks[0]() === 0)
console.log(callbacks[1]() === 2)
console.log(callbacks[2]() === 4)

