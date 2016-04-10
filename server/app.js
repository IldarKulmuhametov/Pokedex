import express from 'express'
import cluster from 'cluster'
import config from './config/index'
import path from 'path'


const app = express();
//app.use(express.static(path.join(__dirname, '../public')));

app.use('/src/styles/main.css ', function(req,res){
    res.sendFile(path.resolve('/public/src/styles/main.css'))
});

app.use('/src/build/build.js', function(req,res){
    res.sendFile(path.resolve('/public/src/build/build.js'))
});


app.use('/src/packages/bootstrap-material-design/dist/css/material.css ', function(req,res){
    res.sendFile(path.resolve('/public/src/packages/bootstrap-material-design/dist/css/material.css '))
});



app.use('/src/packages/bootstrap/dist/css/bootstrap.css', function(req,res){
    res.sendFile(path.resolve('/public/src/packages/bootstrap/dist/css/bootstrap.css'))
});



app.get('/public', function (req, res) {
    res.sendFile(path.resolve('index.html'));
});


//app.get("*", (req, res, next) => {
//    res.sendFile(path.join(__dirname, '../public/index.html'))
//});

config.application.ports.map(port => app.listen(port))