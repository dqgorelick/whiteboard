var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var PORT = 4000 

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  console.log('connected: ' + socket.id)
  
  socket.on('line', function(msg){
  	// wait 
    console.log('line from: ' + socket.id);
    io.emit('line', msg)
  });
  
  socket.on('disconnect', function(){
    console.log('user disconnected ' + socket.id);
  });
});

http.listen(PORT, function(){
  console.log('listening on *:' + PORT);
});