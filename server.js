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

usersSchema.methods.comparPassword = function(candidatePassword, cb){
    bcrypt.compare(candidatePassword, this.password, function(err, isMath){
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

user = mongoose.model('Users', usersSchema)
module.exports = users

// const express = require('express');
// const app = express();
// const bcrypt = require('bcrypt');

// app.use(express.json());

// const users = [];

// app.get('/users', (req, res) => {
//     res.json(users);
// });

// app.post('/users', async (req, res) => {
//     try{
//         const salt = await bcrypt.genSalt();
//         const hashedPassword = await bcrypt.hash(req.body.password, salt);
//         const user = { name: req.body.name, password: req.body.password }
//         users.push(user);
//         res.status(201).send();
//     }catch{
//        res.status(500).send()
//     }
// })

// app.post('/users/login', async (req, res) => {
//     const user = users.find(user.name = req.body.name)
//     if (user == null) {
//         return res.status(400).send('Cannot find user')
//     }
//     try{
//       if(await bcrypt.compare(req.body.password, user.password)) {
//         res.send('Success')
//       }else {
//           res.send('Not Allowed')
//       }
//     }catch{
//         res.status(500).send()
//     }
// })

// app.listen(3000);