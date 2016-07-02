// DB and UTILITIES
var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var mongoose = require('mongoose');

// CONFIG
var config = require('./server/config.js');

// CONTROLLER
var userController = require('./server/userController.js');
var listController = require('./server/listController.js');

// SERVICES
var passport = require('./server/passport.js');

//POLOCIES
var isAuthed = function(request, response, next) {
    if (!request.isAuthenticated()) return response.status(401).send();
    return next();
};

// EXPRESS
var app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + './../public'));
app.use(session({
    secret: config.SESSION_SECRET,
    saveUninitialized: false,
    resave: false
}));
app.use(passport.initialize());
app.use(passport.session());
mongoose.set('debug', true);

//ENDPOINTS


//CONNECTIONS
var mongoURI = config.MONGO_URI;
var port = config.PORT;

// mongoose.connect(mongoURI);

mongoose.connect('mongodb://localhost/yagonnawanna', function(error) {
    console.log('If ' + error + ' = undefined, we can party');
});

mongoose.connection.once('open', function() {
    console.log('Connnected to Mongo DB at', mongoURI);
    app.listen(config.PORT, function() {
        console.log('Listening on port ', config.PORT);
    });
});
