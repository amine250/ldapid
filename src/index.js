var express = require('express');

var app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());

var routes = require('./routes/router');

app.use('/', routes); 

var server = app.listen(3000, function(){
     console.log("Server is running on port 3000");
});
