// import Express from 'express';
var path = require('path');
var Express = require('express');
var engines = require('consolidate');
var mustache = require('mustache');
var mongoose = require('mongoose');

var dbUtils = require('./dbUtils');

const app = new Express();

app.set('port', (process.env.PORT || 3000));
app.set('env', (process.env.NODE_ENV || 'production'));
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'static'));
app.engine('html', engines.mustache);
app.use(Express.static(__dirname + '/static'))

var server = require('http').Server(app);
var io = require('socket.io')(server);

io.on('connection', function (socket) {
  socket.on('client event', function (data) {
    console.log("A User has connected");
    console.log(data);
  });
  socket.on('disconnect', function (socket) {
    console.log('A User has disconnected');
  });
  socket.on('send:message', function(message){
      console.log("Message Received! Contents: " + message.text);
      socket.broadcast.emit('send:message', {text: message.text});
  })
});

// Chatroom Database Storage
mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('we\'re connected!');
});

// Universal routing and rendering handled by React & react-router
// on the client-side.
app.get('*', function(req, res) {
    res.render('index.html');
});

// start the server
server.listen(app.get('port'), function(){
   console.log('[' + app.get('env') + '] Express server listening on port ' + app.get('port'));
});
