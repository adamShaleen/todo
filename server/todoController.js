var USER = require('./user.js');
var TODO = require('./todo.js');

module.exports = {


    addTodo: function(request, response, next) {
        USER.findByIdAndUpdate(request.params.id, request.body, function(error, serverResponse) {
            if (error) {
                return response.status(500).jason(error);
            }
            else {
                return response.status(200).json(serverResponse);
            }
        });
    },

    createTODO: function(request, response, next) {
        TODO.create(request.body, function(error, serverResponse) {
            if (error) {
                return response.status(500).send(error);
            }
            else {
            response.status(200).send(serverResponse);
            }
        });
    },
    //
    // getTODO: function(request, response, next) {
    //     TODO.find(request.query, function(error, serverResponse) {
    //         if (error) {
    //             return response.status(500).send(error);
    //         }
    //         else {
    //             response.status(200).send(serverResponse);
    //         }
    //     });
    // },
    //
    // updateTODO: function(request, response, next) {
    //     TODO.findByIdAndUpdate(request.params.id, request.body, function(error, serverResponse) {
    //         if (error) {
    //             return response.status(500).send(error);
    //         }
    //         else {
    //             response.status(200).send(serverResponse);
    //         }
    //     });
    // },
    //
    // deleteTODO: function(request, response, next) {
    //     TODO.findByIdAndRemove(request.params.id, function(error, serverResponse) {
    //         if (error) {
    //             return response.status(500).send(error);
    //         }
    //         else {
    //             response.status(200).send(serverResponse);
    //         }
    //     });
    // }

};  // Closing tag
