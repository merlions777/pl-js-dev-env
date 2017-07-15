import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

/* eslint-disable no-console */
const port = 2934;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/users', function(req,res){
// hard coding , to mock the hit a real database
res.json([
  {"id": 1, "firstName":"John", "lastName":"Freeman", "email":"javan@walmart.com"},
  {"id": 2, "firstName":"Ninja", "lastName":"Ladak", "email":"eladfopr@walmart.com"},
  {"id": 3, "firstName":"Mayberr", "lastName":"Ray", "email":"dragonw@walmart.com"}
  ]);
});

app.get('/', function(req,res){
    res.sendFile(path.join(__dirname,'../dist/index.html'));
});

app.listen(port, function(err){
    if(err){
        console.log(err);
    }
    else{
        open('http://localhost:'+port);
    }
});
