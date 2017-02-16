/**
 * Created by dennisschmock on 30/01/2017.
 */
let http = require("http");

let server = http.createServer(function (req, res) {
    res.setHeader("Content-type", "text/html");
    res.end("<h1>Hello Everyone</h1>");

});


server.listen(1234, 'localhost', () =>
    console.log('Server Started, listening on port 1234')
);