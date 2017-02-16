/**
 * Created by dennisschmock on 06/02/2017.
 */
const path = require("path");
let fs = require("fs");


let dirSearcher = function (pathToFile, ext, callback) {
    fs.readdir(pathToFile, function (err, data) {
        if (err) {
            return callback(err);
        }
        let extention = "." + ext;
        let filtered = data.filter((file) => path.extname(file) === extention);
        callback(null, filtered);

    })
};

module.exports = dirSearcher;
