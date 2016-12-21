var path = require('path');
var Express = require('express');
var engines = require('consolidate');
var mustache = require('mustache');
var mongoose = require('mongoose');
// Utilities for getting/saving messages to MongoDB
var dbUtils = require('./dbUtils');

var app = new Express();

app.set('port', (process.env.PORT || 3000));
app.set('env', (process.env.NODE_ENV || 'production'));
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'static'));
app.engine('html', engines.mustache);
app.use(Express.static(__dirname + '/static'))

var server = require('http').Server(app);
var io = require('socket.io')(server);

var users = [];

//  Socket.io Server Event Handlers
io.on('connection', function(socket) {
    console.log('A client has connected to the site');

    socket.on('init', function() {
        console.log('User has joined the chatroom');
        var name = "User"+(users.length+1).toString();
        users.push(name);

        console.log(users);
        console.log(name);

        socket.emit('init', {users: users, name});
    });

    socket.on('disconnect', function(socket) {
        console.log('A User has disconnected');
    });
    socket.on('send:message', function(message) {
        console.log("Message Received! Contents: " + message.text);
        socket.broadcast.emit('send:message', {
            user: message.user,
            text: message.text
        });
    })
});

// Refactor these out into separate module later

function usernameAvailable(users, newName){
    if(users.indexOf(newName) > -1){
        // Username taken
        return False;
    } else {
        return True;
    }
}


// Chatroom Database Storage
mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Connected to MongoDB');
});

// Universal routing and rendering handled by React & react-router
// on the client-side.
app.get('*', function(req, res) {
    res.render('index.html');
});

// start the server (using 'server.listen' for compatibility with socket.io)
server.listen(app.get('port'), function() {
    console.log('[' + app.get('env') + '] Express server listening on port ' + app.get('port'));
});
