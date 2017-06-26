//Base Modules
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

//Route Modules
var index = require('./routes/index.js');

// APP CONFIGURATION
app.set('port', process.env.PORT || 8000);

//Middleware Config
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, './public')));

//Serve back static files
app.use(express.static('server/public'));

//routes
app.use('/*', index);

//Listen
app.listen(app.get('port'), function() {
  console.log('Server listening on port ', app.get('port'));
});
