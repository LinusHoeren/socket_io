var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', function (req, res) {
    res.sendfile(__dirname + '/index.html')
});

io.on('connection', function(socket){
    socket.on('chat message', function(msg){
        io.emit('chat message', msg);
    });
});

io.emit('some event', {
    someProperty: 'some value',
    otherProperty: 'other value'
});

http.listen(3000, function () {
    console.log('listening on *:3000');
});