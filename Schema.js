const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const SALT_WORK_FACTOR = 10;
const bcrypt = require('bcrypt');

mongoose.connect('mongodb+srv://alsmith:8rLyIygMtoyHFm6Z@legend-has-it-okomm.mongodb.net/', {dbName: 'legend-has-it'});
mongoose.connection.once('open', () => {
    console.log('Connected with MongoDB ORM - mongodb-orm');
});

let usersSchema = mongoos.Schema({
    name: {type: String, required: true, unique: true},
    password: {type: String, required: true},
});

usersSchema.pre('save', function(next){
    let user = this;
    //Only hashes the password if it has been modified or is new.
    if (!user.isModified('password')) return next();
    //generating the salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);
        //This will hash the password using our new salt
        bcrypt.hash(user.password, salt, function(err, hash){
            if (err) return next(err);
            //This will override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});

usersSchema.methods.comparePassword = function(candidatePassword, cb){
    bcrypt.compare(candidatePassword, this.password, function(err, isMath){
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

user = mongoose.model('Users', usersSchema)
module.exports = usersSchema

