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

//POLICIES
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

//---------------ENDPOINTS-----------------------

// User
app.post('/users', userController.register);

app.get('/me', isAuthed, userController.me);

app.put('/users/:id', isAuthed, userController.update);

app.post('/login', passport.authenticate('local', {
}), function(request, response, next) {
    response.send({login: true});
});

app.get('/logout', function(request, response, next) {
    request.logout();
    return response.status(200).send('logged out');
});


//CONNECTIONS
var mongoURI = config.MONGO_URI;
var port = config.PORT;

mongoose.connect(mongoURI);

// mongoose.connect('mongodb://localhost/yagonnawanna', function(error) {
//     console.log('If ' + error + ' = undefined, we can party');
// });

mongoose.connection.once('open', function() {
    console.log('Connnected to Mongo DB at', mongoURI);
    app.listen(config.PORT, function() {
        console.log('Listening on port ', config.PORT);
    });
});
