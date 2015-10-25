var express = require('express');
var engines = require('consolidate');
var mustache = require('mustache');
var bodyParser = require('body-parser');
//var path = require('path');

var app = express();

app.set('port', 3000);
app.set('views', __dirname + '/public');
app.set('view engine', 'html');
app.engine('html', engines.mustache);
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


var passwords = {"test":"https://www.youtube.com/"}


app.get('/', function(req, res) {res.render('index.html')});
app.get('/portal', function(req, res) {res.render('portal.html')});
app.get('/magazine', function(req, res) {res.render('magazine.html')});
app.get('/summer2015', function(req, res) {res.render('summer2015.html')});

app.post('/entry', function(req, res) {
	var entry = req.body.textEntry;
	editedEntry = entry.toLowerCase().trim();
	console.log(entry);
	console.log(editedEntry);
	if(passwords[editedEntry]) {
		console.log(passwords[editedEntry])
		res.status(200).json({ correct:"YES", 
			link : passwords[editedEntry],
			message : "You got it."
		})
	}
	else {
		res.status(200).json({ correct:"NO" })
	}
})



/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found!');
    err.status = 404;
    next(err);
});

app.listen(app.get('port'), function(){
	console.log('Express server listening on port ' + app.get('port'));
});
