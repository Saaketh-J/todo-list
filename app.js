//REQUIRING
var express = require('express');
var mongoose = require('mongoose');
require('dotenv/config');
var bodyParser = require('body-parser');

var app = express();
app.set('view engine', 'ejs');

//MIDDLEWARE
app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

//IMPORT ROUTES
var postsRoute = require('./routes/posts');
app.use('/', postsRoute);



//CONNECT TO DATABASE
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () => console.log("connected to db"));

//LISTEN 
app.listen(3000);
console.log("Listening on port 3000");
