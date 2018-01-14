/**
 * Created by sf on 2018/1/14.
 */

var ws = require("nodejs-websocket");
var PORT = 3080;

// Scream server example: "hi" -> "HI!!!"
var server = ws.createServer(function (conn) {
    console.log("New connection");
    conn.on("text", function (str) {
        console.log("Received " + str);
        conn.sendText(str.toUpperCase() + "!!!");
    });
    conn.on("close", function (code, reason) {
        console.log("Connection closed");
    });
    conn.on('error', function (err) {
        console.log('handle error');
        console.log(err);
    });
}).listen(PORT);

console.log('websocket server listening on port ' + PORT);