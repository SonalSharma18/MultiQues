var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var User = require('./Models/Users.model') 
var db = 'mongodb://localhost:27017/mcq'
var path = require('path')

//Connecting to database using mongoose
mongoose.connect(db);

//Using JSON bodyparser
app.use(bodyParser.json());

//Setting the static folder for express to work around with static files
app.use(express.static(__dirname + '/static'));



//Working
app.get('/', function(req, res){
  console.log('Test method called');
  res.sendfile('./static/html/index.html');
});

//Working
app.get('/find', function(req, res) {
    console.log('Find method called!');
    User.find(function (err, users) {
    if (err) 
      return console.error(err);
    else {
         res.setHeader('Content-Type', 'application/json');
         res.send(JSON.stringify(users));
         console.log(users);
         res.end('Working!');
    }
        
    });
});

//Working
app.get('/adduser', function(req, res) {
    console.log('/adduser called!');
    
    //Hardcoded test user 
    var user = new User({name: 'Symbol Singla', email : 'symbol@gmail.com', pwhash: 'testhash', type :  'admin'});
    
    user.save(function(err){
        if(err)
            console.log(err);
        else
            console.log(user);
    });
    
    console.log('successfully added!');
    res.end('User successfully added!');
})

var server = app.listen(8080);