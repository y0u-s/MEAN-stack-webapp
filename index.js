const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path')

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://userYoussef:3ef82917@ds141720.mlab.com:41720/oefentoetsendb', (err) => {
    if(err) {
        console.log('Could not connect to db: ', err);

    } else {
        console.log('Connected to DB')
    }
});

app.use(express.static(__dirname + '/client/dist/client'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/dist/client/index.html'));
});

app.listen(3000, () => {
    console.log('Listening to port 3000');
});