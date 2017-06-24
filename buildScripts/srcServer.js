import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

/* eslint-disable no-console */
const port = 2934;
const app = express();
const compiler = webpack(config);

/*Bundling - serves files from memory, CSS, imgs, JS, updates code changes.    */
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/users', function(req,res){
// hard coding , to mock the hit a real database
res.json([
  {"id": 1, "firstName":"John", "lastName":"Freeman", "email":"javan@walmart.com"},
  {"id": 2, "firstName":"Ninja", "lastName":"Ladak", "email":"eladfopr@walmart.com"},
  {"id": 3, "firstName":"Mayberr", "lastName":"Ray", "email":"dragonw@walmart.com"}
  ]);
});

app.get('/', function(req,res){
    res.sendFile(path.join(__dirname,'../src/index.html'));
});

app.listen(port, function(err){
    if(err){
        console.log(err);
    }
    else{
        open('http://localhost:'+port);
    }
});
