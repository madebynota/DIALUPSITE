var express = require('express');
var engines = require('consolidate');
var mustache = require('mustache');
var bodyParser = require('body-parser');

var app = express();

app.set('port', (process.env.PORT || 3000));
app.set('views', __dirname + '/public');
app.set('view engine', 'html');
app.engine('html', engines.mustache);
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', function(req, res) {res.render('home.html')});
app.get('/magazines', function(req, res) {res.render('magazine.html')});


//Routes for Magazines
app.get('/magazines/summer2015', function(req, res) {res.render('reader.html')});
app.get('/magazines/fall2015', function(req, res) {res.render('reader.html')});
app.get('/magazines/winter2016', function(req, res) {res.render('reader.html')});

//Routes for games
app.get('/game', function(req, res) {res.render('game.html')});


/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found!');
    err.status = 404;
    next(err);
});

app.listen(app.get('port'), function(){
	console.log('Express server listening on port ' + app.get('port'));
});

