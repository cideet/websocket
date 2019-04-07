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
    broadcast(conn.nickname + ' coming in');  //有人进来的时候
    conn.on("text", function (str) {  //有人发消息的时间
        console.log("Received " + str);
        broadcast('user' + clientCount + ' say: ' + str);
    });
    conn.on("close", function (code, reason) {  //有人离开的时候
        console.log("Connection closed");
        broadcast(conn.nickname + ' leave');
    });
    conn.on('error', function (err) {  //发生错误的时候
        console.log('handle error');
        console.log(err);
    });
}).listen(PORT);

// 给每个客户端发送消息
function broadcast(str) {
    // server.connections 所有连接
    server.connections.forEach(function (connection) {
        connection.sendText(str);
    })
}

console.log('websocket server listening on port ' + PORT);