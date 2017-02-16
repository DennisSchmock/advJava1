/**
 * Created by dennisschmock on 30/01/2017.
 */
var fs = require('fs');
var test = "test";

var file =  fs.readFile(process.argv[1],'utf8');

var file1 = file.split('\n');

console.log(file1.length-1);