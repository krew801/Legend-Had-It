const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

MongoClient.connect('mongodb+srv://alsmith:8rLyIygMtoyHFm6Z@legend-has-it-okomm.mongodb.net/', (err, database) => {
    var dbase = db.db("crud");
    if (err) return console.log(err)
    app.listen(3000, () => {
        console.log('app working on 3000')
    })
})

app.listen(3000, function(){
    console.log('Listening on 3000');
});

app.get('/login', function(req, res) {
    res.send("I'm working");
});