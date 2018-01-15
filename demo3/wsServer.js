/**
 * Created by sf on 2018/1/14.
 */

var ws = require("nodejs-websocket");
var PORT = 3080;

var clientCount = 0;


// Scream server example: "hi" -> "HI!!!"
var server = ws.createServer(function (conn) {
    console.log("New connection");
    clientCount++;
    conn.nickname = 'user' + clientCount;
    broadcast(conn.nickname + ' coming in');
    conn.on("text", function (str) {
        console.log("Received " + str);
        broadcast(str);
    });
    conn.on("close", function (code, reason) {
        console.log("Connection closed");
        broadcast(conn.nickname + ' leave');
    });
    conn.on('error', function (err) {
        console.log('handle error');
        console.log(err);
    });
}).listen(PORT);

function broadcast(str) {
    server.connections.forEach(function (connection) {
        connection.sendText(str);
    })
}

console.log('websocket server listening on port ' + PORT);