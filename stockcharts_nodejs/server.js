var express = require('express');
var app = express();
var server = require('http').createServer(app);
var https = require('https');
//var mysql = require('mysql');
var router = express.Router();

router.use(function (req, res, next) {
    console.log("/" + req.method);
    next();
});

router.get("/",function(req, res){
    res.sendFile(__dirname + "/index.html");
});

router.get("/news",function(req, res){
    res.sendFile(__dirname + "/news.html");
});

router.get("/charts",function(req, res){
    res.sendFile(__dirname + "/charts.html");
});

router.get("/crypto",function(req, res){
    res.sendFile(__dirname + "/crypto.html");
});

app.use('/data', express.static('public'));

app.use("/",router);

app.use("*",function(req, res){
    res.sendFile(__dirname + "/index.html");
});

//app.use('/data', express.static(path.join(__dirname, 'json')));


server.listen(process.env.PORT || 3000);
console.log('Server is running on port 3000...');

