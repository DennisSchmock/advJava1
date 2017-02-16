/**
 * Created by dennisschmock on 30/01/2017.
 */

var testarray = process.argv;
var sum = 0;

for (var i = 2; i < testarray.length; i++) {
    sum = sum + Number(testarray[i]);

}

console.log(sum);