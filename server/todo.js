var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var todoSchema = new Schema ({
    item: {type: String}
});


module.exports = mongoose.model('TODO', todoSchema);
