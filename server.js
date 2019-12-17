const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const router = express.Router();
const chatCtrl = require('./controller/chatCtrl');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../build')));
app.use(express.static(path.join(__dirname, '../client')));

app.use('/', router.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname, '../index.html'));
}));

module.exports = app;