/**
 * Created by dennisschmock on 06/02/2017.
 */
let myDirSearcher = require("./learn6");

myDirSearcher(process.argv[2],process.argv[3],function(err,data){
    if(err){
       return console.log(err)
    }

    console.log(data.join("\n"));
})

