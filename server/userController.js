var User = require('./user.js');

module.exports = {

    register: function(request, response, next) {
        User.create(request.body, function(error, serverResponse) {
            if (error) return response.status(500).send(error);
            serverResponse.password = null;
            response.status(200).json(serverResponse);
        });
    },

    me: function(request, response, next) {
        if (!request.user) return response.status(401).send('User not defined');
        request.user.password = null;
        return response.status(200).json(request.user);
    },

    update: function(request, response, next) {
        User.findByIdAndUpdate(request.params._id, request.body, function(error, serverResponse) {
            if (error) next(error);
            response.status(200).send('User Updated');
        });
    }

};
