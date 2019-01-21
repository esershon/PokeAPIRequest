//GRAB THE DEPENDENCIES
const express = require("express");
const bodyParser = require('body-parser');
// const mongoose = require("mongoose"); //this is in the models file

const app = express();

app.use(express.static( __dirname + '/public/dist/public' ));
// app.use(express.static(__dirname + "/static"));
// app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// app.set('views', __dirname+'/views');
// app.set('view engine', 'ejs');

// require('./server/routes')(app);

app.listen(8000, ()=> console.log("listening on port 8000"))