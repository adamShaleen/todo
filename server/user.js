var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var todoSchema = require('./todo.js');
var Schema = mongoose.Schema;

var User = new Schema ({
    email: {type: String, index: true, trim: true, required: true},
    password: {type: String, required: true},
    todo: [
        {
            id:{type: Schema.Types.ObjectId, ref: 'TODO'}
        }
    ]
});

User.pre('save', function(next) {
    var user = this;
    if (!user.isModified('password')) return next();
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(user.password, salt);
    user.password = hash;
    return next(null, user);
});

User.methods.verifyPassword = function(reqBodyPassword) {
    var user = this;
    return bcrypt.compareSync(reqBodyPassword, user.password);
};

module.exports = mongoose.model('User', User);
