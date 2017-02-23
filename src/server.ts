import net = require('net');//import socket module
import ip = require('ip');

// define address interface
interface Address { port: number; family: string; address: string; };

// create socket server
let server:net.Server = net.createServer();

// when the server is connected
server.on('connection', function(socket:net.Socket){

    
   //we've established a socket to use

   //send a message to the socket
   socket.write('Hello you!\n');

   //close the connection
   //socket.end();

    // when data is sent to the socket
    socket.on('data', function(data){
        socket.write('(type something and hit return)\n');
        return;
    });

    socket.on('close', function(){
        // handle client disconnecting
    })


});

//when the server starts listening...
server.on('listening', function() {
    //output to the console the port number on which we are listening
    var addr:Address = server.address();
    console.log('server listening on port %d', addr.port);
});

//start the server
server.listen({
  host: ip.address(),
  port: 3000
});