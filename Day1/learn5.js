/**
 * Created by dennisschmock on 06/02/2017.
 */
const path = require("path");
let fs = require("fs");

const pathToFile = process.argv[2];
const ext = "." + process.argv[3];

fs.readdir(pathToFile,function (err,data) {
    if(err){
        return err;
    }
    filtered = data.filter((file)=>path.extname(file)===ext);
    filtered.forEach(function (data) {
        console.log(data);
    });

});