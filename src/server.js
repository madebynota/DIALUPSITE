var path = require('path');
var Express = require('express');
var engines = require('consolidate');
var mustache = require('mustache');
var mongoose = require('mongoose');
var bodyParser   = require('body-parser');
var mongodb   = require('mongodb');
var marklar = require('marklar');

// Utilities for getting/saving messages to MongoDB
var dbUtils = require('./dbUtils');

var app = new Express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('port', (process.env.PORT || 3000));
app.set('env', (process.env.NODE_ENV || 'production'));
app.set('mongo_url', (process.env.MONGO_URL || "mongodb://localhost:27017/madcastdb"));
app.set('view engine', 'jade');
app.set('views', path.join(__dirname, 'static'));
app.engine('html', engines.mustache);
app.use(Express.static(__dirname + '/static'));

//Routes for Magazines. Must be defined before catch-all route.
var magRoutes = [
	'/magazines/summer2015',
	'/magazines/fall2015',
	'/magazines/winter2016',
	'/magazines/summer2016'
];
app.get(magRoutes, function(req, res) {res.render('reader/reader.html')});

// Chatroom Database Storage
var mongoose = require('mongoose');
mongoose.connect('mongodb://root:root@ds157278.mlab.com:57278/dialup');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Connected to MongoDB');
});

var server = require('http').Server(app);
var io = require('socket.io')(server);

var users = [];
var message_queue = [];
var message_queue_length = 10;

var previousMessages = dbUtils.getMessages(message_queue_length, function(messages) {
    messages.map(function(obj) {
        var message = {
            user: obj.user,
            text: obj.text,
            color: obj.color,
            timestamp: obj.timestamp
        };

        addMessageToQueue(message_queue, message);
    });
});

//  Socket.io Server Event Handlers
io.on('connection', function(socket) {
    var name;

    socket.on('init', function() {
        marklar.nameFile['rappers'] = './src/rapper-names.txt';
        name = marklar.getName('rappers').split(" ")[0];
        color = dbUtils.getColor(users.length);
        users.push(name);
        socket.emit('init', {users: users, messages: message_queue, name, color});
        socket.broadcast.emit('user:join', {name: name, users: users});
    });

    socket.on('disconnect', function() {
        if(typeof name !== 'undefined'){
            var index = users.indexOf(name);
            users.splice(index, 1);
            socket.broadcast.emit('user:left', {name: name, users: users});
        }
    });

    socket.on('send:message', function(message) {
        dbUtils.saveMessage(message.user, message.text, message.color);
        addMessageToQueue(message_queue, message);
        socket.broadcast.emit('send:message', {
            user: message.user,
            text: message.text,
            color: message.color,
            timestamp: Date.now()
        });
    });

	socket.on('change:username', function(names) {
		var index = users.indexOf(names.oldName);
        users.splice(index, 1);
        users.push(names.newName);
		socket.broadcast.emit('change:username', {oldName: names.oldName, newName: names.newName});
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
function addMessageToQueue(queue, message) {
    if (queue.length >= message_queue_length) {
        queue.shift();
    }
    queue.push(message);
}

// Universal routing and rendering handled by React & react-router
// on the client-side.
app.get('*', function(req, res) {
    res.render('index.html');
});

// start the server (using 'server.listen' for compatibility with socket.io)
server.listen(app.get('port'), function() {
    console.log('[' + app.get('env') + '] Express server listening on port ' + app.get('port'));
});
