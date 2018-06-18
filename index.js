const express = require('express');
const app = express();
const router = express.Router();
const mongoose = require('mongoose');
const path = require('path')
const authentication = require('./routes/authentication')(router)
const bodyParser = require('body-parser')
const cors = require('cors')

var corsOptions = {
    origin: 'http://example.com',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://userYoussef:3ef82917@ds141720.mlab.com:41720/oefentoetsendb', (err) => {
    if(err) {
        console.log('Could not connect to db: ', err);

    } else {
        console.log('Connected to DB')
    }
});


app.use(cors({
        origin: 'http://localhost:4200'
    })
);


app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(express.static(__dirname + '/client/dist/client'))
app.use('/authentication', authentication)

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/dist/client/index.html'));
});

app.listen(3000, () => {
    console.log('Listening to port 3000');
});