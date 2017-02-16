/**
 * Created by dennisschmock on 30/01/2017.
 */
var fs = require('fs');
var test = "test";

var file =  fs.readFileSync(process.argv[2],'utf8');

var file1 = file.split('\n');

console.log(file1.length-1);