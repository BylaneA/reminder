const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const port = process.env.PORT || 8080;

const app = express();

//Middlewares
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

//Connection à la base de données
mongoose.connect('mongodb://localhost/reminder');

//Routes
app.use('/users', require('./routes/users'));

//Start the server

app.listen(port);
console.log('Le serveur marche, t\'entend!');