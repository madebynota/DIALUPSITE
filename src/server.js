// import Express from 'express';
var path = require('path');
var Express = require('express');
var engines = require('consolidate');
var mustache = require('mustache');

const app = new Express();

app.set('port', (process.env.PORT || 3000));
app.set('env', (process.env.NODE_ENV || 'production'));
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'static'));
app.engine('html', engines.mustache);
app.use(Express.static(__dirname + '/static'));

//Routes for Magazines. Must be defined before catch-all route.
app.get('/magazines/summer2015', function(req, res) {res.render('reader/reader.html')});
app.get('/magazines/fall2015', function(req, res) {
	console.log("Reached Fall 2015 stuff");
	res.render('reader/reader.html')
});
app.get('/magazines/winter2016', function(req, res) {res.render('reader/reader.html')});
app.get('/magazines/summer2016', function(req, res) {res.render('reader/reader.html')});

// Universal routing and rendering handled by React & react-router
// on the client-side.
app.get('*', function(req, res) {
	console.log("Reached catch-all: " + req.url);
    res.render('index.html');
});

// start the server
app.listen(app.get('port'), function(){
    console.log('[' + app.get('env') + '] Express server listening on port ' + app.get('port'));
});