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
app.use(Express.static(__dirname + '/static'))

// Universal routing and rendering handled by React & react-router
// on the client-side.
app.get('*', function(req, res) {
    res.render('index.html');
});

// start the server
app.listen(app.get('port'), function(){
    console.log('[' + app.get('env') + '] Express server listening on port ' + app.get('port'));
});