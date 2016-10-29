var express = require('express');
var engines = require('consolidate');
var mustache = require('mustache');

var app = express();

app.set('port', (process.env.PORT || 3000));
app.set('views', __dirname + '/public');
app.set('view engine', 'html');
app.engine('html', engines.mustache);
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {res.render('home.html')});
app.get('/magazines', function(req, res) {res.render('magazine.html')});

//Routes for Magazines
app.get('/magazines/summer2015', function(req, res) {res.render('reader.html')});
app.get('/magazines/fall2015', function(req, res) {res.render('reader.html')});
app.get('/magazines/winter2016', function(req, res) {res.render('reader.html')});
app.get('/magazines/summer2016', function(req, res) {res.render('reader.html')});

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    res.redirect('/');
});

app.listen(app.get('port'), function(){
	console.log('Express server listening on port ' + app.get('port'));
});

