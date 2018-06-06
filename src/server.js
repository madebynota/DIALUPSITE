var path = require('path');
var Express = require('express');
var engines = require('consolidate');
var mustache = require('mustache');
var marklar = require('marklar');
var robots = require('express-robots');

var app = new Express();

app.set('port', (process.env.PORT || 3000));
app.set('env', (process.env.NODE_ENV || 'production'));
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'static'));
app.engine('html', engines.mustache);
app.use(Express.static(__dirname + '/static'));
app.use(robots(__dirname + '/robots.txt'));

//Routes for Magazines. Must be defined before catch-all route.
var magRoutes = [
	'/magazines/summer2015',
	'/magazines/fall2015',
	'/magazines/winter2016',
	'/magazines/summer2016'
];
app.get(magRoutes, function(req, res) {res.render('reader/reader.html')});

var server = require('http').Server(app);

// Google verification code
app.get('/google241026178fd51955.html', function(req, res) {
    res.render('google241026178fd51955.html');
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
